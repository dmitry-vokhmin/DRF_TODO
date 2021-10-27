from .base import *

DEBUG = True

ALLOWED_HOSTS = ['0.0.0.0']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'todos',
        'USER': 'dima',
        'PASSWORD': 'qwerty',
        'HOST': 'db',
        'PORT': '5432',
    }
}