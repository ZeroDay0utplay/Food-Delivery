import os


os.system("heroku login")
os.system("git init")
os.system("git add .")
os.system("git commit -m '" + input("[+] Commit Message : ") + '"')
os.system("heroku create")
os.system("git push heroku master")