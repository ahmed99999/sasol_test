from django.contrib.postgres.fields import ArrayField
from django.db import models


class Product(models.Model):
    index = models.IntegerField(primary_key=True)
    active = models.BooleanField()
    price = models.CharField(max_length=255)
    picture = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    description = models.TextField()
    tags = ArrayField(models.CharField(max_length=255))
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
