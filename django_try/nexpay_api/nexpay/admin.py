from django.contrib import admin

from .models import Item, ForexRate, Payment

# Register your models here.


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = (
        "item_name",
        "item_desc",
    )
