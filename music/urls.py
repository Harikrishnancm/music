from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('music/<int:i>',views.playMusic,name="music"),
    path('next/<int:i>',views.next,name='next'),
    path('prev/<int:i>',views.prev,name='prev'),
    path('login',views.login,name="login"),
    path('register',views.register,name='register'),
    path('signout',views.signout,name='signout'),
    path('playlist/<int:pk>',views.playlist,name='playlist'),
    path('playlistview',views.playlistview,name='playlistview'),
    path('playlist/remove/<int:pk>/', views.remove_from_playlist, name='remove_from_playlist')
    
] 