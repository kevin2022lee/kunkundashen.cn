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


localip='www.kunkundashen.cn'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

##################################代码开始了！###################################################
@csrf_protect

def vdreport(request):
    return render(request,'vdreport/login.html')

@csrf_protect
def vdlogin(request):
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
                    request.session['nick']="系统超级管理员"
                    users=User.objects.get_by_natural_key(username=account)
                    request.session['uid']=users.id
                    request.session['email']=users.email  
                    request.session['lastlogin']=users.last_login.strftime('%Y年%m月%d号')
                    usds=userusd.objects.get(uuid=int(users.id))
                    request.session['usd']=usds.usd
                    request.session['IP']=request.META.get("REMOTE_ADDR")
                    return HttpResponseRedirect('http://'+localip+'/vdindex/' )
            else:
                errors='<script type="text/JavaScript">alert("对不起！密码错误。您是不是忘记密码了？");window.location.href=document.referrer;</script>'                        
                return HttpResponse(errors)

##########################超级管理登陆功能实现代码##########################################   
##########################超级管理登陆功能实现代码##########################################    
@csrf_protect
def vdindex(request):
    applicants=applicant.objects.all().count()
    usercounts=User.objects.count()
    applicant_results=applicant_result.objects.all().count()
    applicant_prescriptions=applicant_prescription.objects.all().count()
    return render_to_response('vdreport/vdindex.html',{
        'applicants':applicants,
        'usercounts':usercounts,
        'applicant_results':applicant_results,
        'applicant_prescriptions':applicant_prescriptions
                              },context_instance=RequestContext(request)) 
def vdloginout(request):
    auth.logout(request)
    return HttpResponseRedirect('http://'+localip+'/vdreport/') 
def applicant_admin(request):
    return render(request,'vdreport/applicant.html',{'localip':localip})

@csrf_protect
def applicantpost(request):
    if request.method=="POST":
        s=applicant(
            name=request.POST["Name"],
            age=request.POST["Age"],
            telphone=request.POST["Telphone"],
            received_date=request.POST["R_date"],
            sex=request.POST["Sex"],
            report_date=request.POST["P_date"],
            is_check=1,
            doctor=request.POST["Doctor"],
            hospital=request.POST["Hospital"],
            assess=request.POST["Assess"],
            method=request.POST["Method"],
            )
        s.save()
        tips='<script type="text/JavaScript">alert("信息录入成功！");window.location.href=document.referrer;</script>' 
        return HttpResponse(tips)
def applicant_list(request):
    applicants=applicant.objects.filter(is_check=1)
    return render(request,'vdreport/applicant_list.html',{
        'localip':localip,
        'applicants':applicants
                                                          })
def applicant_result_admin(request,aid):
    return render(request,'vdreport/applicant_result.html',{
        'localip':localip,
        'aid':aid
        })
def applicantresultpost(request,aid):
    if request.method=="POST":
        applicant_results=applicant_result(
            applicant_id=aid,
            apal=request.POST["Apal"],
            taql=request.POST["Taql"],
            bsml=request.POST["Bsml"],
            fokl=request.POST["Fokl"],
            apal_type=request.POST["Apal_type"],
            taql_type=request.POST["Taql_type"],
            bsml_type=request.POST["Bsml_type"],
            fokl_type=request.POST["Fokl_type"],
            is_calculated=0,
            )
        applicant_results.save()
        applicants=applicant.objects.get(id=aid)
        applicants.is_check=0
        applicants.save()
        tips='<script type="text/JavaScript">alert("结果录入成功！");window.location.href="../../applicant_list";</script>'
        return HttpResponse(tips)
def applicant_result_list(request):
    applicant_results=applicant.objects.raw(u'SELECT a.*,b.id as result_id,b.applicant_id,b.apal,b.apal_type,b.bsml,b.bsml_type,b.taql,b.taql_type,b.fokl,b.fokl_type,b.`is_calculated`  From ( `myblog_applicant` as a LEFT JOIN `myblog_applicant_result` as b ON a.id= b.`applicant_id` ) WHERE a.`is_check` = 0 and `is_calculated`= 0 ')
    return render(request,'vdreport/applicant_result_list.html',{
        'localip':localip,
        'applicant_results':applicant_results
                                                          })
def applicant_presciption_admin(request,aid,rid):
    return render(request,'vdreport/applicant_prescription.html',{
        'localip':localip,
        'aid':aid,
        'rid':rid
        })
def applicantprescriptionpost(request,aid,rid):
    if request.method=="POST":
        applicant_prescriptions=applicant_prescription(
            applicant_id=aid,
            result_id=rid,
            is_printable=0,
            Vd=request.POST["Vd"],
            Ga=request.POST["Ga"],
            )
        applicant_prescriptions.save()
        applicant_results=applicant_result.objects.get(id=rid)
        applicant_results.is_calculated=1
        applicant_results.save()
        tips='<script type="text/JavaScript">alert("处方录入成功！");window.location.href="../../../applicant_result_list";</script>'
        return HttpResponse(tips)
def applicant_result_print(request):
    applicant_prints=applicant.objects.raw(u'SELECT * FROM myblog_vdr_print')
    return render(request,'vdreport/applicant_print_list.html',{
        'localip':localip,
        'applicant_prints':applicant_prints
                                                          })
def applicant_print_admin(request,pid):
    applicant_print_prevs=applicant.objects.raw(u'SELECT * FROM myblog_vdr_print WHERE id='+pid)
    return render(request,'vdreport/applicant_print_prev.html',{
        'localip':localip,
        'pid':pid,
        'applicant_print_prevs':applicant_print_prevs 
         })    
def applicant_report_is_printable(request,pid):
    applicant_report_print=applicant_prescription.objects.get(id=pid)
    applicant_report_print.is_printable=1
    applicant_report_print.save()
    tips='<script type="text/JavaScript">alert("打印成功！");window.location.href="../../applicant_result_print";</script>'
    return HttpResponse(tips)
def applicant_print_query(request):
    if request.method=="GET":
        telphone=request.GET.get('Telphone','13222228888')
        applicant_printeds=applicant.objects.raw(u"SELECT * FROM myblog_vdr_printed WHERE telphone="+telphone)
        return render(request,'vdreport/applicant_print_query.html',{
            'applicant_printeds':applicant_printeds,
            })
def applicant_printed_admin(request,pid):
    applicant_print_prevs=applicant.objects.raw(u'SELECT * FROM myblog_vdr_printed WHERE id='+pid)
    return render(request,'vdreport/applicant_print_prev.html',{
        'localip':localip,
        'pid':pid,
        'applicant_print_prevs':applicant_print_prevs 
         })  
            