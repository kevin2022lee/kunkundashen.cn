from django.db import models
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from system.storage import ImageStorage
from email import email

# Create your models here.

#class User(models.Model):
class Fujian(models.Model):
    name = models.CharField(max_length=32)
    file = models.FileField(upload_to="upload/%Y/%m/%d/")
    uploadtime = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
    

class BlogUser(models.Model):
    username=models.CharField(max_length=150)
    password=models.CharField(max_length=150)
    email_address=models.CharField(max_length=100)
    admin_type=models.BigIntegerField()

class PostType(models.Model):
    typename=models.CharField(max_length=200)
    addtime=models.DateTimeField(auto_now=True)
    
class BlogPost(models.Model):
    id=models.IntegerField(primary_key=True)
    u=models.ForeignKey(User,related_name='auth_user_id')
    title = models.CharField(max_length=150)
    content = models.TextField()
    article_click=models.BigIntegerField()
    artcle_type = models.ForeignKey(PostType,related_name='PostType_id')
    is_recycle = models.BigIntegerField()
    timestamp = models.DateTimeField()


class ReplyPost(models.Model):
    u=models.ForeignKey(User,related_name='auth_user_id')
    r=models.ForeignKey(BlogPost,related_name='BlogPost_id')
    rcontent=models.TextField(max_length=500)
    createtime = models.DateTimeField(auto_now=True)
    is_recycle=models.IntegerField()

class OligoSeqSyt(models.Model):
    uid=models.IntegerField()
    SeqName=models.TextField(max_length=20)
    Sequence=models.TextField(max_length=10000)
    SeqLength=models.IntegerField()
    SeqTm=models.IntegerField()
    SeqAcount=models.IntegerField()
    SeqGcount=models.IntegerField()
    SeqCcount=models.IntegerField()
    SeqTcount=models.IntegerField()
    SeqJcount=models.IntegerField()
    SeqFcount=models.IntegerField()
    SeqGC=models.FloatField()
    SeqMW=models.FloatField()
    SeqOD=models.FloatField()
    SeqText=models.TextField(max_length=1000)
    SeqReverse=models.TextField(max_length=10000)
    SeqAddTime=models.DateTimeField(auto_now=True)

class WebViewCount(models.Model):
    pagename=models.TextField(max_length=20)
    viewcount=models.IntegerField()
    lastviewtime=models.DateTimeField(auto_now=True)    
    
class PhotoDB(models.Model):
    u=models.IntegerField()
    imagename=models.TextField(max_length=50)
    imageurl=models.TextField(max_length=255)
    imagesize=models.TextField(max_length=10)
    zanclick=models.IntegerField()
    uploadtime=models.DateTimeField(auto_now=True)
    is_public=models.IntegerField()

class UploadIMG(models.Model):
    u=models.ForeignKey(User,related_name='auth_user_id')
    imagename=models.TextField(max_length=50)
    imageurl=models.ImageField(upload_to='upload/%Y-%m-%d/',storage=ImageStorage())
    imagesize=models.TextField(max_length=10)
    zanclick=models.IntegerField()
    uploadtime=models.DateTimeField()
    is_public=models.IntegerField()
        
class userusd(models.Model):
    uuid=models.IntegerField()
    usd=models.IntegerField(max_length=16)

class DbBook(models.Model):
    bname=models.TextField()
    btype=models.TextField()
    bimage=models.TextField()
    baddr=models.TextField()
    bauthor=models.TextField()
    brnum=models.FloatField()
    bcp=models.TextField()
    bdescription=models.TextField()

class DbMovie(models.Model):
    mname=models.TextField()
    myear=models.TextField()
    mimage=models.TextField()
    mlink=models.TextField()
    mdirecter=models.TextField()
    mrnum=models.FloatField()
    mlist=models.FloatField()
    mnp=models.TextField()
    mdescr=models.TextField()

class applicant(models.Model):
    name=models.TextField()
    age=models.TextField()
    sex=models.TextField()
    telphone=models.TextField()
    received_date=models.DateTimeField()
    report_date=models.DateTimeField()
    doctor=models.TextField()
    is_check=models.IntegerField()
    hospital=models.TextField()
    assess=models.TextField()
    method=models.TextField()
    timestamp = models.DateTimeField(auto_now=True)
class applicant_result(models.Model):
    applicant_id=models.IntegerField()
    apal=models.TextField()
    apal_type=models.TextField()
    taql=models.TextField()
    taql_type=models.TextField()
    bsml=models.TextField()
    bsml_type=models.TextField()
    fokl=models.TextField()
    fokl_type=models.TextField()
    is_calculated=models.IntegerField()
    timestamp = models.DateTimeField(auto_now=True)
class applicant_prescription(models.Model):
    applicant_id=models.IntegerField()
    result_id=models.IntegerField()
    Vd=models.TextField()
    Ga=models.TextField()
    is_printable=models.IntegerField()
    timestamp = models.DateTimeField(auto_now=True)
#purchase

    
class material(models.Model):
    material=models.TextField()
    unit=models.TextField()
    code=models.TextField()
    cas=models.TextField()
    grade=models.TextField()
    extra=models.TextField()
    package=models.TextField()
    JD_date=models.DateTimeField()
    is_contacted=models.IntegerField()
    is_qutotion=models.IntegerField()
    timestamp = models.DateTimeField(auto_now=True)

class contact(models.Model):
    contact=models.TextField()
    telphone=models.TextField()
    information=models.TextField()
    website=models.TextField()
    email=models.TextField()
    timestamp = models.DateTimeField(auto_now=True)

class quotation(models.Model):
    material_contact_id=models.IntegerField()
    company=models.TextField()
    price=models.TextField()
    policy=models.TextField()
    year=models.TextField()
    timestamp = models.DateTimeField(auto_now=True)
class material_contact(models.Model):
    material_id=models.IntegerField()
    contact_id=models.IntegerField()
    