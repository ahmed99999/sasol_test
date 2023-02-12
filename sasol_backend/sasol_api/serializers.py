from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    temp_price = serializers.SerializerMethodField()

    # noinspection PyMethodMayBeStatic
    def get_temp_price(self, instance):
        return instance.getTempPrice()

    class Meta:
        db_table = 'products'
        model = Product
        fields = '__all__'
