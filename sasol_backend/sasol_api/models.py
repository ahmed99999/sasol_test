from django.contrib.postgres.fields import ArrayField
from django.db import models
import datetime


class Product(models.Model):
    active = models.BooleanField()
    price = models.CharField(max_length=255)
    picture = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=False)
    tags = ArrayField(models.CharField(max_length=255), default=list, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def getTempPrice(self):
        start = datetime.time(10, 0, 0)
        end = datetime.time(15, 00, 0)
        current = datetime.datetime.now().time()
        return self.getDiscountedPrice() if start <= current <= end else self.price

    def getDiscountedPrice(self):
        myPrice = self.getFloatPrice()
        price = myPrice - (myPrice * 10 / 100)
        return str(format(price, '.2f'))

    def getFloatPrice(self):
        return float(self.price.replace(',', ''))
