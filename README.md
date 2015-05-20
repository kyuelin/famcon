# famcon
famcon project started.

# data models
family
{
    "code": 12345,
    "devices" : [],
    "adminpwd": "password"
}

device
{
    "id": 1,
    "latitude": 3.213
    "longitude": -23.343
}

# views
registration/management
{
    family.code
    register
}
{
    family.code
    family.adminpwd
    manage
}

mapviews
{
    family.devices
}
