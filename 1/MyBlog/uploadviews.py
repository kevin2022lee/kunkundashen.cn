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
import os
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
import json
from django.conf import settings
from forms import *


localip='8.136.216.2'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

##################################代码开始了！###################################################
def upload(req):
     return render(req,'upload.html',{
        'localip':localip
        })
@csrf_exempt
def FileUploads(req):
    file = req.FILES.get('file')  # 获取文件对象，包括文件名文件大小和文件内容
    curttime = time.strftime("%Y%m%d")
    #规定上传目录
    upload_url = os.path.join(settings.MEDIA_ROOT,'attachment',curttime)
    #判断文件夹是否存在
    folder = os.path.exists(upload_url)
    if not folder:
        os.makedirs(upload_url)
        print("创建文件夹")
    if file:
        file_name = file.name
        #判断文件是是否重名，懒得写随机函数，重名了，文件名加时间
        if os.path.exists(os.path.join(upload_url,file_name)):
            name, etx = os.path.splitext(file_name)
            addtime = time.strftime("%Y%m%d%H%M%S")
            finally_name = name + "_" + addtime + etx
            #print(name, etx, finally_name)
        else:
            finally_name = file.name
         #文件分块上传
        upload_file_to = open(os.path.join(upload_url, finally_name), 'wb+')
        for chunk in file.chunks():
            upload_file_to.write(chunk)
        upload_file_to.close()
        #返回文件的URl
        file_upload_url = settings.MEDIA_URL + 'attachment/' + curttime + '/' +finally_name
        #构建返回值
        response_data = {}
        response_data['FileName'] = file_name
        response_data['FileUrl'] = file_upload_url
        response_json_data = json.dumps(response_data)#转化为Json格式
        return HttpResponse(response_json_data)
def fujian_add(request):
    if request.method == 'POST':
        form = FujianForm(request.POST,request.FILES)
        if form.is_valid():
            fujian = form.save()
            data = {'is_valid':True,'name':fujian.file.name,'url':fujian.file.url}
        else:
            data = {'is_valid':False}
        return JsonResponse(data)
 
    if request.method == 'GET':
        return render(request,"fujian_add.html")
