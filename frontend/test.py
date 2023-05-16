import requests

url = "http://localhost:5000/api/tracks/trackcover"

payload = 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWY3NmY1NzU1MzgyNzhmOTU2OGYyNyIsImlhdCI6MTY4NDEzNDIxMywiZXhwIjoxNjg0MjIwNjEzfQ.6xEam_uOVpl3DJGcj2BFMC7EaM-THhB055QgBAOGgQ4&id=6461ca911d69a1175a72532a'
headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)