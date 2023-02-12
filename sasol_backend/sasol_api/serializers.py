from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        db_table = 'products'
        model = Product
        fields = '__all__'
