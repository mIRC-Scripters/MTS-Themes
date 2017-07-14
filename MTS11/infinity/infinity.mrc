alias infinity.whois {
  %:echo 13 ————————(2 /whois %::nick 13)———————————————————————
  %:echo 13 realname (2 %::realname 13)
  %:echo 13 chans (2 %::chan 13)
  %:echo 13 server (2 %::wserver 13)
  if (%::text) %:echo 13 away (2 %::text 13)
  if (%::idletime) %:echo 13 idle (2 $duration(%::idletime) 13)
  %:echo 13 ——————————————————————(2 end of /whois13 )—————————
}

alias infinity.load {
  %:echo 13 ————————————————————————————————————————————————————————————
  %:echo 12 --
  %:echo 13 infinity2 theme loaded!  
  %:echo 13 http://infinityscript.8m.com
  %:echo 12 --
  %:echo 13 ———————————(2scripted by [-infinity-]13)———————————
}

alias blind.unload {
  %:echo 13 ————————————————————————————————————————————————————————————
  %:echo 12 --
  %:echo 13 infinity2 theme unloaded!  
  %:echo 13 http://infinityscript.8m.com
  %:echo 12 --
  %:echo 13 ———————————(2scripted by [-infinity-]13)———————————
}

alias blind.topic {
  %:echo 13 —————————————————————————————————————
  %:echo 13 topic (0 %::text 13)
}

alias blind.topica {
  %:echo 13 topic set by2 %::nick 13on0 %::text
  %:echo 13 ———————————————————————————————————————————————
}
