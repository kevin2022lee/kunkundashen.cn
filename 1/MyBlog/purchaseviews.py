#coding:utf-8
from django.template import RequestContext,loader
from django.shortcuts import *
from django.http import HttpResponse,HttpResponseRedirect
from django.db.models import Q,connection,Count,Max
from MyBlog.models import *
from MyBlog.forms import MsgPostForm
from django.core.paginator import Paginator
from django.core.mail import send_mail  
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.contrib import auth
import time
from django.utils import timezone # 导入时间
import datetime
from calendar import monthrange
import sys,urllib
import base64  
import uu
from django.forms.models import model_to_dict 
from math import ceil
from django.http.response import HttpResponse


localip='8.136.216.2'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

##################################代码开始了！###################################################
@csrf_protect

def purchaseadmin(request):
    return render(request,'purchaseadmin/login.html')

@csrf_protect
def palogin(request):
    global localip 
    errors= []  
    account=None  
    password=None  
    if request.method == 'POST' :  
        request.session['login_from'] = request.META.get('HTTP_REFERER', '/') 
        account = request.POST['account']  
        password= request.POST['password']  
        if account is not None and password is not None :
            user = auth.authenticate(username=account,password=password)
            if user:
                    auth.login(request,user)
                    request.session['is_logined']=True
                    request.session['nick']=account
                    users=User.objects.get_by_natural_key(username=account)
                    request.session['uid']=users.id
                    request.session['email']=users.email  
                    request.session['lastlogin']=users.last_login.strftime('%Y年%m月%d号')
                    usds=userusd.objects.get(uuid=int(users.id))
                    request.session['usd']=usds.usd
                    request.session['IP']=request.META.get("REMOTE_ADDR")
                    return HttpResponseRedirect('http://'+localip+'/paindex/' )
            else:
                errors='<script type="text/JavaScript">alert("对不起！密码错误。您是不是忘记密码了？");window.location.href=document.referrer;</script>'                        
                return HttpResponse(errors)

##########################超级管理登陆功能实现代码##########################################   
##########################超级管理登陆功能实现代码##########################################    
@csrf_protect
def paindex(request):
    materials=material.objects.all().count()
    contacts=contact.objects.count()
    quotations=quotation.objects.all().count()
    #views=materials.objects.raw(u'SELECT  COUNT( *) FROM `myblog_material_contact_view`')
    return render_to_response('purchaseadmin/vdindex.html',{
        'materials':materials,
        'contacts':contacts,
        'quotations':quotations,
 #       'views':str(views)
                              },context_instance=RequestContext(request)) 
def paloginout(request):
    auth.logout(request)
    return HttpResponseRedirect('http://'+localip+'/purchaseadmin/') 
def material_admin(request):
    return render(request,'purchaseadmin/material.html',{'localip':localip})
def contact_admin(request):
    contacts=contact.objects.all()
    return render(request,'purchaseadmin/contact.html',{
        'localip':localip,
        'contacts':contacts,
        })
@csrf_protect
def contactpost(request):
    if request.method=="POST":
        try:
            s=contact(
                contact=request.POST["contact"],
                telphone=request.POST["telphone"],
                information=request.POST["information"],
                website=request.POST["website"],
                email=request.POST["email"],
                )
            s.save()
            tips='<script type="text/JavaScript">alert("信息录入成功！");window.location.href=document.referrer;</script>' 
            return HttpResponse(tips)
        except:
            tips='<script type="text/JavaScript">alert("联系人电话已存在，重复录入！");window.location.href=document.referrer;</script>' 
            return HttpResponse(tips)
@csrf_protect
def materialpost(request):
    if request.method=="POST":
        try:
            s=material(
                material=request.POST["material"],
                code=request.POST["code"],
                cas=request.POST["cas"],
                JD_date=request.POST["JD_date"],
                unit=request.POST["unit"],
                package=request.POST["package"],
                grade=request.POST["grade"],
                extra=request.POST["extra"],
                is_contacted=0,
                is_qutotion=0,
                )
            s.save()
            tips='<script type="text/JavaScript">alert("信息录入成功！");window.location.href=document.referrer;</script>' 
            return HttpResponse(tips)
        except:
            tips='<script type="text/JavaScript">alert("信息重复录入！");window.location.href=document.referrer;</script>' 
            return HttpResponse(tips)
def material_list(request):
    materials=material.objects.filter(is_contacted=0)
    contacts=contact.objects.all()
    return render(request,'purchaseadmin/material_list.html',{
        'localip':localip,
        'materials':materials,
        'contacts':contacts
                                                          })
@csrf_protect
def material_contact_add(req):
    if req.method=="POST":
        try:
            s=material_contact(
                material_id=int(req.POST['material_id']),
                contact_id=int(req.POST['contact_id']),
            )
            s.save()
            m=material.objects.get(id=req.POST['material_id'])
            m.is_contacted=1
            m.save()
            tips='<script type="text/JavaScript">alert("√物料联系人录入成功！");window.location.href=document.referrer;</script>' 
            return HttpResponse(tips)
        except:
            tips='<script type="text/JavaScript">alert("×联系人重复添加");window.location.href=document.referrer;</script>'
            return HttpResponse(tips)
def material_contact_list(req):
    views=material.objects.raw(u'SELECT * FROM myblog_material_contact_view where is_qutotion = 0 and is_contacted = 1')
    return render(req,'purchaseadmin/material_contact_list.html',{
        'localip':localip,
        'views':views,
                                                          })
    
def material_contact_quotation(req,cid):
    return render(req,'purchaseadmin/material_contact_qutotation.html',{
        'localip':localip,
        'cid':cid,
                                                          })
@csrf_protect
def materialcontactquotationpost(req,mcid):
    if req.method=="POST":
        try:
            s=quotation(
                material_contact_id=mcid,
                company=req.POST['company'],
                price=req.POST['price'],
                policy=req.POST['policy'],
                year=req.POST['year'],
                )
            s.save()
            mc=material_contact.objects.get(id=mcid)
            m=material.objects.get(id=mc.material_id)
            m.is_qutotion=1
            m.save()
            tips='<script type="text/JavaScript">alert("√'+req.POST['company']+req.POST['year']+'年度的报价信息录入成功！");window.location.href="../../material_contact_list/";</script>' 
            return HttpResponse(tips)
        except:
            tips='<script type="text/JavaScript">alert("×年度报价重复添加");window.location.href="../../material_contact_list/";</script>'
            return HttpResponse(tips)
def material_contact_query(req):
    if req.method=="GET":
        code=req.GET.get('code','氯')
        materials=material.objects.raw(u"SELECT * FROM `myblog_material_quotation_view` WHERE material REGEXP '"+code+"'")
        try:
            return render(req,'purchaseadmin/material_contact_query.html',{
                'materials':materials,
                })
        except:
            return render(req,'purchaseadmin/material_contact_query.html',{
                'materials':{},
                })
def material_query(req):
    if req.method=="GET":
        code=req.GET.get('code','氯')
        materials=material.objects.raw(u"SELECT * FROM `myblog_material_quotation_view` WHERE material REGEXP '"+code+"'")
        try:
            return render(req,'purchaseadmin/material_query.html',{
                'materials':materials,
                })
        except:
            return render(req,'purchaseadmin/material_query.html',{
                'materials':{},
                })
def material_query_all(req):
    if req.method=="GET":
        materials=material.objects.raw(u"SELECT * FROM `myblog_material_quotation_view`")
        try:
            return render(req,'purchaseadmin/material_contact_query.html',{
                'materials':materials,
                        })
        except:
            return render(req,'purchaseadmin/material_contact_query.html',{
                'materials':{},
                })