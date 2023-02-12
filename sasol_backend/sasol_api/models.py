from django.contrib.postgres.fields import ArrayField
from django.db import models
import datetime


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

    def getTempPrice(self):
        start = datetime.time(10, 0, 0)
        end = datetime.time(15, 00, 0)
        current = datetime.datetime.now().time()
        return self.price if start <= current <= end else self.getDiscountedPrice()

    def getDiscountedPrice(self):
        price = float(self.price.replace(',', '')) * 10 / 100
        return str(format(price, '.2f'))
