# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class SurveyQuestion(models.Model):
    question_text = models.CharField(max_length=200)
    counter = models.IntegerField(default=1)