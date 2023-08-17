from django.db import models

class BlogPostView(models.Model):
    title = models.CharField(max_length = 150)
    content = models.TextField()
    article_click=models.BigIntegerField()
    typename=models.CharField(max_length=200)
    username=models.CharField(max_length=150)
    timestamp = models.DateTimeField()

class Meta:
        db_table = 'MyBlog_view'
