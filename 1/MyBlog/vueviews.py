from django.core.paginator import Paginator
from django.core.mail import send_mail  
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.template import RequestContext,loader
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect

def vue(request):
    return render_to_response('vue/vue.html',context_instance=RequestContext(request))