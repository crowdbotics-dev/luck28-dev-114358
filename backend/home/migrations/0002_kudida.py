# Generated by Django 3.2.20 on 2023-09-05 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Kudida',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('forty7', models.BigIntegerField()),
                ('w8', models.GenericIPAddressField(blank=True, null=True)),
                ('kurida', models.PositiveIntegerField(blank=True, null=True)),
            ],
        ),
    ]
