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
from MySiteWithPython.settings import EMAIL_HOST_USER 
import time
from django.utils import timezone # 导入时间
import datetime
from calendar import monthrange
import sys,urllib
import base64  
import uu
from django.forms.models import model_to_dict 
from math import ceil


localip='www.kunkundashen.cn'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

##################################代码开始了！###################################################
@csrf_protect

def super(request):
    return render(request,'admin/index.htm')

@csrf_protect
def superlogin(request):
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
                    request.session['nick']="超级管理员(root)"
                    users=User.objects.get_by_natural_key(username=account)
                    request.session['uid']=users.id
                    request.session['email']=users.email  
                    request.session['lastlogin']=users.last_login.strftime('%Y年%m月%d号')
                    usds=userusd.objects.get(uuid=int(users.id))
                    request.session['usd']=usds.usd
                    request.session['IP']=request.META.get("REMOTE_ADDR")
                    return HttpResponseRedirect('http://'+localip+'/sindex/' )
            else:
                errors='<script type="text/JavaScript">alert("对不起！密码错误。你丫是不是忘记密码了？");window.location.href=document.referrer;</script>'                        
                return HttpResponse(errors)

##########################超级管理登陆功能实现代码##########################################    
@csrf_protect
def sindex(request):
    articlecounts=BlogPost.objects.filter(is_recycle=1).count()
    usercounts=User.objects.count()
    commentcounts=ReplyPost.objects.filter(is_recycle=0).count()
    piccounts=UploadIMG.objects.filter(is_public=1).count()
    return render_to_response('admin/bindex.html',{
        'articlecounts':articlecounts,
        'usercounts':usercounts,
        'commentcounts':commentcounts,
        'piccounts':piccounts
                              },context_instance=RequestContext(request)) 

@csrf_protect
def sloginout(request):
    auth.logout(request)
    return HttpResponseRedirect('http://'+localip+'/super/') 

def content_admin(request):
    posts=BlogPost.objects.filter(is_recycle=1).order_by('-timestamp').all()
    return render_to_response('admin/cindex.html',{
        'posts':posts,
        'localip':localip
        },context_instance=RequestContext(request)) 

def picture_admin(request):
    pics=UploadIMG.objects.filter(is_public=1).order_by('-uploadtime').all()
    return render_to_response('admin/pindex.html',{
        'pics':pics,
        'localip':localip
        },context_instance=RequestContext(request)) 
 
def comment_admin(request):
    comments=ReplyPost.objects.filter(is_recycle=0).order_by('-createtime').all()
    return render_to_response('admin/caindex.html',{
        'comments':comments,
        'localip':localip
        },context_instance=RequestContext(request)) 
    
def unrecyclereplybyid(request):
    id=request.GET.get('id')
    ur=ReplyPost.objects.get(id=int(id))
    ur.is_recycle=1
    ur.save()
    tips='<script type="text/JavaScript">alert("审核成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)

##################################删除评论代码##################################################################
def deletereplybyid(request):
    id=request.GET.get('id')
    delete=ReplyPost.objects.get(id=id)
    delete.delete()
    tips='<script type="text/JavaScript">alert("删除成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)

       
def unrecycleblogbyid(request):
    id=request.GET.get('id')
    ur=BlogPost.objects.get(id=int(id))
    ur.is_recycle=0
    ur.save()
    tips='<script type="text/JavaScript">alert("审核成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)

def unrecycleimgbyid(request):
    id=request.GET.get('id')
    ur=UploadIMG.objects.get(id=int(id))
    ur.is_public=0
    ur.save()
    tips='<script type="text/JavaScript">alert("审核成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)

##################################删除图片代码##################################################################
def deleteimgbyid(request):
    id=request.GET.get('id')
    delete=UploadIMG.objects.get(id=id)
    delete.delete()
    tips='<script type="text/JavaScript">alert("删除成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)

def super_admin_user(request):
    uu=User.objects.filter(Q(is_superuser=0),Q(is_active=1)).all()
    return render_to_response('admin/admin_user.html',{
        'uu':uu,
        'localip':localip
        },context_instance=RequestContext(request)) 
def forbiddenuserbyid(request):
    id=request.GET.get('id')
    ufb=User.objects.get(id=int(id))
    ufb.is_active=0
    ufb.save()
    tips='<script type="text/JavaScript">alert("禁用成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)
def setsuperuserbyid(request):
    id=request.GET.get('id')
    uss=User.objects.get(id=int(id))
    uss.is_superuser=1
    uss.save()
    tips='<script type="text/JavaScript">alert("设置成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)
def unforbiddenuserbyid(request):
    id=request.GET.get('id')
    uuf=User.objects.get(id=int(id))
    uuf.is_active=1
    uuf.save()
    tips='<script type="text/JavaScript">alert("解禁成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)  
def foreverdeleteuserbyid(request):
    id=request.GET.get('id')
    ufd=User.objects.get(id=int(id))
    ufd.delete()
    tips='<script type="text/JavaScript">alert("删除成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips)     
def deleteuser(request):
    uu=User.objects.filter(Q(is_superuser=0),Q(is_active=0)).all()
    return render_to_response('admin/delete_user.html',{
        'uu':uu,
        'localip':localip
        },context_instance=RequestContext(request)) 
def session_admin(request):
    today = datetime.date.today()
    seven_day_before = today - datetime.timedelta(days=3)
    ss=Session.objects.filter(expire_date__gte=seven_day_before).order_by('-expire_date')
    return render_to_response('admin/session_admin.html',{
        'ss':ss,
        'localip':localip
        },context_instance=RequestContext(request)) 
def deletesessionbykey(request):
    key=request.GET.get('id')
    sd=Session.objects.get(session_key=str(key))
    sd.expire_date='1970-01-01 00:00:00'
    sd.save()
    tips='<script type="text/JavaScript">alert("会话删除成功！");window.location.href=document.referrer;</script>' 
    return HttpResponse(tips) 
def classifyadmin(request):
    cc=PostType.objects.order_by('-addtime').all()
    return render_to_response('admin/classify_admin.html',{
        'cc':cc,
        'localip':localip
        },context_instance=RequestContext(request))
    
def classifyedit(request,id):
    ce=PostType.objects.get(id=id)
    return render_to_response('admin/classify_edit.html',{
        'ce':ce,
        'id':id,
        'localip':localip
        },context_instance=RequestContext(request))
@csrf_protect
def classifyeditpost(request,id):
    if request.method=="POST":
        ce=PostType.objects.get(id=id)
        ce.typename=request.POST['typename']
        ce.save()
        tips='<script type="text/JavaScript">alert("分类编辑成功！");window.location.href=document.referrer;</script>' 
        return HttpResponse(tips) 
def classifyadd(request):
    return render_to_response('admin/classify_add.html',{
        'localip':localip
        },context_instance=RequestContext(request))
def classifypost(request):
    if request.method=="POST":
        typename=request.POST['typename']
        try:
            c=PostType(
                typename=typename
                )
            c.save()
        except:
            return HttpResponse("无法保存数据！")  
        tips='<script type="text/JavaScript">alert("分类增加成功！");window.location.href=document.referrer;</script>'
        return HttpResponse(tips)  