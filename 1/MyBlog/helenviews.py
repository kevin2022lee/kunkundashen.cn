#coding:utf-8
from django.template import RequestContext,loader
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect,csrf_exempt
import time

localip='www.kunkundashen.cn'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

def helen(request):
    return render_to_response('helen/index.html',{
                                    'local':localip,
                                    'thisyear':thisyear
        },context_instance=RequestContext(request))