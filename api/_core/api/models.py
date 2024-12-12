from django.db import models

# Create your models here.
class Person(models.Model):
    lastname = models.CharField(max_length=40)
    firstname = models.CharField(max_length=40)
    age=models.IntegerField()
    # image= models.ImageField(upload_to='/images')
    
    def __str__(self):
        return self.firstname