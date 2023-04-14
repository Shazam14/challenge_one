from django.db import models

# Create your models here.
from django.db import models

class ForexRate(models.Model):
    from_currency = models.CharField(max_length=3)
    to_currency = models.CharField(max_length=3)
    amount = models.CharField(max_length=5)
    rate = models.DecimalField(max_digits=10, decimal_places=5)

    class Meta:
        unique_together = (("from_currency", "to_currency", "amount"),)

    def __str__(self):
        return f"{self.from_currency}/{self.to_currency}/{self.amount}: {self.rate}"
    

class Payment(models.Model):
    payment_id = models.IntegerField(primary_key=True, null=False, default="001")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=3)
    status = models.CharField(max_length=10)


class Item(models.Model):
    id = models.IntegerField(primary_key=True)
    item_name = models.CharField(max_length=20)
    item_desc = models.CharField(max_length=50, default="default item")
    


