#coding:utf-8
from django.template import RequestContext,loader
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from bs4 import BeautifulSoup as bs
import urllib
import urllib2
import re
import time
import datetime
import sys
from django.core.files import images
reload(sys)
sys.setdefaultencoding('utf8')


def bocai(request):
        
    return render_to_response('bocai/bocai.html',context_instance=RequestContext(request))

def score2ubb(request):
        
    return render_to_response('bocai/score2ubb.html',context_instance=RequestContext(request))

def dagaier(request):
        
    return render_to_response('dagaier/dagaier.html',context_instance=RequestContext(request))

def yyjp(request):
        
    return render_to_response('dagaier/yiyejingpin.html',context_instance=RequestContext(request))

def getyyjp(request):
    if request.method=="POST":    
        address_list=request.POST["yyjpinfo"]
        url=[]
        ex_url=[]
        down_urls=[]
        down_titles=[]
        dct={}
        url=address_list.split('\n')
        for u in url:
            user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0'
            #设置请求头 
            header = {'User-Agent': user_agent} 
            #拼接url并获取头文件内容 
            request = urllib2.Request(u, headers=header) 
            response = urllib2.urlopen(request).read()
            soup=bs(response,'lxml')
            #弃掉img标记
            [s.extract() for s in soup("img")]

            ziyuans_name=soup.find_all('h4')[0].get_text()
            
            content=soup.select('div.tpc_content.do_not_catch')
            contents=str(content).replace(' \\','\\').replace(' D','D')
            
            regular = re.compile(r'https://www.yifile*.com/[\S\t\n\r]*')
#             regular2 = re.compile(r"【影片名称】：[^\s]+")
            
            down_url=re.findall(regular, contents)
            for du in down_url:
                down_urls.append(du.split('</a>')[0])
                down_titles.append(str(du.split('</a>')[1]).decode('unicode_escape').replace('<br/>','').replace('<a','').replace('下载地址：','').replace('</div>]','').replace('【下载地址】：','').replace('【影片截图】：',''))
            down_titles.insert(0, ''.join(ziyuans_name)) 
        dct=dict(zip(down_urls,down_titles))


            #拼接资源标题
#             titles=''.join(re.findall(regular2, contents)).replace('下载地址','').replace('：：','：')
#             titles=re.findall(regular2, contents)
#             titles = [s.encode('gbk') for s in titles]
#             title=titles.split('：')
            #去掉空元素
#             title=[i for i in title if i != '']
            
#             ziyuan_titles.append(title)
#             ziyuans_tuple=list(zip(ziyuan_titles,down_urls))
#             
#         yyjp_dict=dict(zip(ziyuans_names,ziyuans_tuple))
#             contents_all.append(re.findall(regular, contents))
#             contents=contents.split('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>')
#             for content in contents:
#                 contents_all.append(content.replace('<br/>','').replace('下载地址','<br>下载地址').replace('html</a>','html</a><br>').replace('<div class="tpc_content do_not_catch">','').replace('</div>',''))
        return render_to_response('dagaier/getyyjp.html',{"contents":dct,
                                                          "ex_url":down_url
                                                       })


def getimage(request):
    if request.method=="POST":    
        address_list=request.POST["dgeinfo"]
        url=[]
        imagelst=[]
        images_names=[]
        url=address_list.split('\n')
        for u in url:
            user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0'
            #设置请求头 
            header = {'User-Agent': user_agent} 
            #拼接url并获取头文件内容 
            request = urllib2.Request(u, headers=header) 
            response = urllib2.urlopen(request).read()
            soup=bs(response,'lxml')
            images_name=soup.find_all('h4')[0].get_text()
            images_names.append(images_name)
            contents=soup.find_all('img',{"ess-data":True})
            for content in contents:
                imagelst.append(content["ess-data"])
        return render_to_response('dagaier/getimage.html',{"contents":imagelst,
                                                           "images_names":images_names
                                                       })

def kaipan(request):
    if request.method=="POST":    
        address_list=request.POST["clkpinfo"]
        url=[]
        url=address_list.split('\n')
        infos={}
        game_names=[]
        game_contents=[]
        for u in url:
        
            user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0'
            #设置请求头 
            header = {'User-Agent': user_agent} 
            #拼接url 
            request = urllib2.Request(u, headers=header) 
            response = urllib2.urlopen(request).read()
            soup=bs(response,'lxml')
        
            game_name=soup.find_all('h4')[0].get_text()
            
            game_names.append(game_name)
            
            contents=soup.find('table',style=lambda value: value and 'border' in value and 'width' in value)
        
            content=contents.find_all('b')
            
            game_content=str(content).decode('unicode_escape').replace('</b>]', '</b>').split(',')
                
            game_contents.append(game_content)    
            
        infos=dict(zip(game_names,game_contents))
        
        dt=datetime.datetime.now().strftime('%m-%d')
        
        return render_to_response('bocai/kaipan.html',{"infos":infos,
                                                       "dt":dt
                                                       })   
        
def Html2UBB(content):
    #以下是将html标签转为ubb标签
    pattern = re.compile( '<a href=\"([sS]+?)\"[^>]*>([sS]+?)</a>',re.I)
    content = pattern.sub(r'[url=1]2[/url]',content)
    pattern = re.compile( '<img[^>]+src=\"([^\"]+)\"[^>]*>',re.I)
    content = pattern.sub(r'[img]1[/img]',content)
    pattern = re.compile( '<strong>([sS]+?)</strong>',re.I)
    content = pattern.sub(r'[b]1[/b]',content)
    pattern = re.compile( '<font color=\"([sS]+?)\">([sS]+?)</font>',re.I)
    content = pattern.sub(r'[1]2[/1]',content)
    pattern = re.compile( '<[^>]*?>',re.I)
#以下是将CSS转义为UBB
    content = content.replace('<td>','[td]')
    content = content.replace('<tr>','[tr]')
    content = content.replace('<tr class="tr3">','[tr]')
#    content = content.replace('<th>','[td]')
    content = content.replace('</td>','[/td]')
    content = content.replace('</tr>','[/tr]')
#    content = content.replace('</th>','[/td]')
    content = content.replace('</table>','[/table]')
    content = content.replace('<table>','[table]')
#    content = content.replace('</tbody>','[/tbody]')
#    content = content.replace('<tbody>','[tbody]')
    content = content.replace('<table style="border: 1px solid #D4EFF7; width: 100%;">','[table=100%]')
    content = content.replace('<span style="display: inline-block; color: green;">','[color=green]')
    content = content.replace('<span style="display: inline-block; color: purple;">','[color=purple]')
    content = content.replace('<span style="display: inline-block; color: orange;">','[color=orange]')
    content = content.replace('<span style="display: inline-block; color: blue;">','[color=blue]')
    content = content.replace('<span style="display: inline-block; color: red;">','[color=red]')
    content = content.replace('<span style="display:inline-block;color:green">','[color=green]')
    content = content.replace('<span style="display:inline-block;color:purple;">','[color=purple]')
    content = content.replace('<span style="display:inline-block;color:blue">','[color=blue]')
    content = content.replace('<span style="display:inline-block;color:red">','[color=red]')  
    content = content.replace('<span class="f18">','[size=4]')                            
    content = content.replace('<span style="color: #0000ff;">','[color=blue]')
    content = content.replace('<span style="font-family: \'arial black\', \'avant garde\'; font-size: 14pt;">','[color=black]')
    content = content.replace('</span>','[/color]')
    content = content.replace('<td style="text-align: center;">','[td]')
#    content = content.replace('<br />','[br]')    
    content = content.replace('<p align="center">','[align=center]')
    content = content.replace('</p>','[/align]')              
    content = content.replace('<strong>','[b]')
    content = content.replace('</strong>','[/b]') 
#     content = content.replace('<b>','[b]')
#     content = content.replace('</b>','[/b]') 
    content = content.replace('</h4>','[/size][/color]')
    content = content.replace('<h4>','[size=5][align=center][color=red]')                    
    content = pattern.sub('',content)
    #以下是将html转义字符转为普通字符
    content = content.replace('^p','')#替换换行符
    content = content.replace('/n','')
    content = content.replace('<','<')
    content = content.replace('>','>')
    content = content.replace('”','”')
    content = content.replace('“','“')
    content = content.replace('"','"')
    content = content.replace('©','©')
    content = content.replace('®','®')
    content = content.replace(' ',' ')
    content = content.replace('—','—')
    content = content.replace('–','–')
    content = content.replace('‹','‹')
    content = content.replace('›','›')
    content = content.replace('…','…')
    content = content.replace('&','&')

    return content

#利用函数转换代码 
@csrf_exempt
def html2ubb(request):
    html_code=request.POST["html_code"]
    dt=datetime.datetime.now().strftime('%m-%d')
    ubbs=Html2UBB(html_code).replace('[/color][/color]','[/color][/size]').replace('\r\n','')
    return render_to_response('bocai/ubb.html',{"ubbs":ubbs,
                                                "html_code":html_code,
                                                "dt":dt
                                                       },context_instance=RequestContext(request))   