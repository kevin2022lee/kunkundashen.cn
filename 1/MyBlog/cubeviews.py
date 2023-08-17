#coding:utf-8
from django.template import RequestContext,loader
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect
import time

localip='www.kunkundashen.cn'
thisyear=time.strftime('%Y',time.localtime(time.time()))
thismonth=time.strftime('%m',time.localtime(time.time()))

def cube(request):
    return render_to_response('tools/cube22.html',{'localip':localip,
                                                 'thisyear':thisyear,
                                                 'thismonth':thismonth,
                                                 },context_instance=RequestContext(request))
def cube33(request):
    return render_to_response('tools/cube33.html',{'localip':localip,
                                                 'thisyear':thisyear,
                                                 'thismonth':thismonth,
                                                 },context_instance=RequestContext(request))

def cube44(request):
    return render_to_response('tools/cube44.html',{'localip':localip,
                                                 'thisyear':thisyear,
                                                 'thismonth':thismonth,
                                                 },context_instance=RequestContext(request))
def cube_pyraminx(request):
    return render_to_response('tools/cubepyraminx.html',{'localip':localip,
                                                 'thisyear':thisyear,
                                                 'thismonth':thismonth,
                                                 },context_instance=RequestContext(request))
def clin_table(request):
    return render_to_response('tools/clin_table.html',{'localip':localip,
                                                 'thisyear':thisyear,
                                                 'thismonth':thismonth,
                                                 },context_instance=RequestContext(request))