import requests
import json

client_id = "eceda0c385e54199bbb57766d72399ba"
access_token = "YOUR_ACCESS_TOKEN"
client_secret = "fe178566c47b4b6193d19fa9124d844e"
redirect_uri = "https://github.com/dmaznytskyi"

print ("https://api.instagram.com/oauth/authorize/?client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type=code&scope=public_content")
code = str(raw_input())
client_params = {
            "client_id": client_id,
            "client_secret": client_secret,
            "redirect_uri": redirect_uri,
            "grant_type": "authorization_code",
            "code": code
                }
r = requests.post("https://api.instagram.com/oauth/access_token", client_params)
access_token = json.loads(r.text)['access_token']

# print r.text
# print access_token

# hashtag = raw_input("Enter hashtag: ")
# get_ht_count = requests.get("https://api.instagram.com/v1/tags/"+hashtag+"?access_token="+access_token)
# print get_ht_count.text

# count_posts = json.loads(get_ht_count.text)['data']['media_count']
# print ("System have " + str(count_posts) + " post on this hashtag")

# get_liker (it works, just trust me)
# likers = requests.get("https://api.instagram.com/v1/media/1610635489688362327/likes?access_token="+access_token)
# print likers.text

# p_raw = requests.get("https://api.instagram.com/v1/tags/"+hashtag+"/media/recent?access_token="+access_token)
# print p_raw.text

# posts = json.loads(p_raw.text)['data']
# print posts