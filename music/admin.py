from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ("id","artistName","created","last_updated")
@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = ("id","album","songThumbnail","song","songname","created","last_updated","category")
@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ("artist","albumName","created","last_updated")
@admin.register(category)
class CategoryAdmin(admin.ModelAdmin):
    list_display= ("category",)
    
@admin.register(language)
class languageAdmin(admin.ModelAdmin):
    list_display = ("language",)

@admin.register(favourites)
class favouriteAdmin(admin.ModelAdmin):
    list_display = ('user','music')
    