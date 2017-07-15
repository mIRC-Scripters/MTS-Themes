; HennesScript <NW> mIRC theme standard engine
; Addon version
; MTS Engine © Copyright 2000-2001 HENNESSY
; MTS Themes are available on http://HennesScript.cjb.net
;
; MTS engine version: 1.1

; Commmands:
; /mts_sound [ON|OFF]


on *:START: {
  if (!%XP) set %XP 1
  if (!%XP.adjust) set %XP.adjust 7
  set %RGBdef RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
  set %colorsDef Colors 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15
  if ($exists(mts.has)) { if ($hget(theme)) hfree theme | .hmake theme | .hload theme mts.has }
  else { echo -s Error in MTS engine, recompiling... | theme.load " $+ $mircdirthemes\mIRC\mIRC.mts" | hsave -o theme mts.has }
  $iif(%mts_sound,mts_sfx)
}

alias mts_sound if ($1) set %mts_sound $iif($1 == ON,1,0) | if ($show) echo *** MTS sounds are: $iif(%mts_sound,ON,OFF)
alias mtsversion return 1.1
alias mtsengine return MTS

alias theme.load {
  set %mts 1 | set -u0 %:echo echo $color(normal text) -s $+ $iif(%option.timestamp,t) | .remini mirc.ini background @mdi | .remini mirc.ini background wchannel
  if (!$gettok($1-,2,34)) {
    if (%::loaded_theme) .unload -rs %::loaded_theme | set %::loaded_theme $null | var %u = 0 | while (%u != 16) { color -r %u | inc %u }
    background -mx | background -sx | background -lx | background -ux | background -hx
    if ($server) { var %c = 1 | while ($chan(%c)) { background -x $chan(%c) | inc %c } }
    if ($hget(theme)) hfree theme | hmake theme 100 | var %i = 1 | var %y = [SCHEME1]
  }
  else { var %x = $read -w[SCHEME $+ $gettok($1-,2,34) $+ $chr(93) " $+ %cache.last_mts_theme $+ " | var %i = $readn | var %y = [SCHEME $+ $calc($gettok($1-,2,34) + 1) $+ $chr(93) }
  var %ii = $calc($lines($gettok($1-,1,34)) + 1) | while (%i != %ii) { var %x = $read -nl $+ %i $gettok($1-,1,34) | if (%x == %y) goto end | if (%x) && ($left(%x,1) != $chr(59)) hadd theme $gettok(%x,1,32) $gettok(%x,2-,32) | inc %i } | :end
  set %::c1 $gettok($hget(theme,BaseColors),1,44) | set %::c2 $gettok($hget(theme,BaseColors),2,44) | set %::c3 $gettok($hget(theme,BaseColors),3,44) | set %::c4 $gettok($hget(theme,BaseColors),4,44)
  set %::pre $$thm($hget(theme,prefix)) | set %::lt < | set %::gt >
  var %i = 0 | while (%i != 16) { if ($gettok($hget(theme,RGBcolors),%i,32)) { color %i $rgb( [ $gettok($hget(theme,RGBcolors),$calc(%i + 1),32) ] ) } | else color -r %i | inc %i }
  var %i = 1 | while (%i != 27) { var %x = $gettok(Background.Action text.CTCP text.Highlight text.Info text.Info2 text.Invite text.Join text.Kick text.Mode text.Nick text.Normal text.Notice text.Notify text.Other text.Own text.Part text.Quit text.Topic text.Wallops text.Whois text.Editbox.Editbox text.Listbox.Listbox text.Grayed text,%i,46) | color [ %x ] $gettok($hget(theme,colors),%i,44) | inc %i }
  set %nicklist.color.owner $hget(theme,clineowner) | set %nicklist.color.host $hget(theme,clineop) | set %nicklist.color.voice $hget(theme,clinevoice) | set %nicklist.color.regular $hget(theme,clineregular) | set %nicklist.color.own $hget(theme,clineme)
  if ($hget(theme,script)) { .timerLOAD 1 0 .load -rs " $+ $nofile($gettok($1-,1,34)) $+ $hget(theme,script) $+ " | set %::loaded_theme $hget(theme,script) }
  var %x = -se [ $+ [ $ImageParameter($gettok($hget(theme,ImageStatus),1,32)) ] ] | var %y = " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageStatus),2-,32) $+ " | if ($hget(theme,ImageStatus)) background %x %y
  var %x = -de [ $+ [ $ImageParameter($gettok($hget(theme,ImageQuery),1,32)) ] ] | var %y = " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageQuery),2-,32) $+ " | if ($hget(theme,ImageQuery)) background %x %y
  var %x = -me [ $+ [ $ImageParameter($gettok($hget(theme,ImageMirc),1,32)) ] ] | var %y = " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageMirc),2-,32) $+ " | if ($hget(theme,ImageMirc)) background %x %y
  if ($hget(theme,ImageToolbar)) background -l " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageToolbar),2-,32) $+ "
  if ($hget(theme,ImageButtons)) background -u " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageButtons),1-,32) $+ "
  if ($hget(theme,ImageSwitchbar)) background -h " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageSwitchbar),2-,32) $+ "
  if ($server) { var %i = 1 | while ($chan(%i)) { if ($hget(theme,ImageChan)) { var %x = -e [ $+ [ $ImageParameter($gettok($ifmatch,1,32)) ] ] | var %y = " $+ $nofile($gettok($1-,1,34)) $+ $gettok($hget(theme,ImageChan),2-,32) $+ " | background %x $chan(%i) %y } | inc %i } } | XupdateNL 1
  if ($hget(theme,fontdefault)) {
    if ($server) { var %i = 1 | while ($chan(%i)) { var %x = $hget(theme,fontdefault) | font $chan(%i) $gettok(%x,2,44) $gettok(%x,1,44) | inc %i } }
    writeini mirc.ini fonts fchannel $hget(theme,fontdefault)
    writeini mirc.ini fonts fquery $hget(theme,fontdefault)
    writeini mirc.ini fonts fstatus $hget(theme,fontdefault)
    font -s $gettok($hget(theme,fontdefault),2,44) $gettok($hget(theme,fontdefault),1,44) 
  }
  if ($hget(theme,fontchan)) { if ($server) { var %i = 1 | while ($chan(%i)) { var %x = $hget(theme,fontchan) | font $chan(%i) $gettok(%x,2,44) $gettok(%x,1,44) | inc %i } } }
  if ($hget(theme,fontchan)) writeini mirc.ini fonts fchannel $ifmatch | if ($hget(theme,fontquery)) writeini mirc.ini fonts fquery $ifmatch | if ($hget(theme,fontstatus)) { writeini mirc.ini fonts fstatus $ifmatch | font -s $gettok($ifmatch,2,44) $gettok($ifmatch,1,44) }
  .timestamp -ef [HH:nn:ss]
  if ($hget(theme,MTSversion) <= 1.0) {
    if ($hget(theme,timestamp)) .timestamp -fe $iif($hget(theme,timestamp) == OFF,$readini mirc.ini text timestamp,$hget(theme,timestamp))
    if ($hget(theme,timestamp) == OFF) { set %option.timestamp 0 | if ($dialog(DLGoptions)) did -u DLGoptions 146  }
    else { set %option.timestamp 1 | if ($dialog(DLGoptions)) did -c DLGoptions 146 }
  }
  else {
    if ($hget(theme,timestampformat)) .timestamp -fe $hget(theme,timestampformat)
    if ($hget(theme,timestamp) == OFF) { set %option.timestamp 0 | if ($dialog(DLGoptions)) did -u DLGoptions 146  }
    else { set %option.timestamp 1 | if ($dialog(DLGoptions)) did -c DLGoptions 146 } 
  }
  !echo -s $+ $iif(%option.timestamp,t) [MTS] Theme loaded: " $+ $gettok($1-,1,34) $+ " | set %cache.last_mts_theme $gettok($1-,1,34) | .timerSHOWLOAD -m 1 25 mts_showload 
}

alias mts_showload if ($hget(theme,LOAD)) { clear -s | echo -s $+ $iif(%option.timestamp,t) $$thm($hget(theme,LOAD)) }
alias mtsdir return $mircdirthemes\
alias ImageParameter if ($1 == center) return c | if ($1 == fill) return f | if ($1 == normal) return n | if ($1 == stretch) return r | if ($1 == photo) return p | if ($1 == tile) return t | return n
alias theme.unload .enable #raw.whois | .Xunload %::loaded_theme | if ($hget(theme,UNLOAD)) echo -s $+ $iif(%option.timestamp,t) $$thm($hget(theme,LOAD))  | if ($hget(theme)) hfree theme | var %i = 0 | while (%i != 16) { color -r %i | inc %i }
alias theme.setting return $hget(theme,$1)
alias theme.text %:echo $$thm($hget(theme,$1-))

on *:CONNECT: set %::server $server | set %::port $port | $iif(%mts_sound,mts_sfx)
on *:DISCONNECT: $iif(%mts_sound,mts_sfx) | set %::server $null | set %::port $null

alias theme.unload return
alias thm if (!$1) return | set -u0 %::timestamp $timestamp | if ($gettok($1,1,32) == !script) { if ($gettok($1-,2-,32)) $eval($thm_($eval( [ [ $ifmatch ] ] ,2)),2) | return $null } | else { $iif(%mts_sound,mts_sfx) | return $dll(MTSgen.dll,MTSEvalString,$1-) }
alias thm_ return $dll(MTSgen.dll,MTSEvalString,$1-)

alias mts_sfx {
  if (!%mts_sound) return
  if ($event isnum) goto SndRaw
  var %snd_event = $event
  if ($event) goto $event
  if (!$1) return
  goto $1
  :Input | if ($hget(theme,SndTextSelf)) splay $ifmatch | return
  :Text | if ($hget(theme,SndText)) splay $ifmatch | return
  :Notice | if ($hget(theme,SndNotice)) splay $ifmatch | return
  :Join | if ($hget(theme,SndJoin)) splay $ifmatch | return
  :Part | if ($hget(theme,SndPart)) splay $ifmatch | return
  :Kick | if ($hget(theme,SndKick)) splay $ifmatch | return
  :Op | if ($hget(theme,SndOp)) splay $ifmatch | return
  :Deop | if ($hget(theme,SndDeop)) splay $ifmatch | return
  :Ban | if ($hget(theme,SndBan)) splay $ifmatch | return
  :Invite | if ($hget(theme,SndInvite)) splay $ifmatch | return
  :Error | if ($hget(theme,SndError)) splay $ifmatch | return
  :Start | if ($hget(theme,SndConnect)) splay $ifmatch | return
  :Disconnect | if ($hget(theme,SndDisconnect)) splay $ifmatch | return
  :Open | if ($hget(theme,SndOpen)) splay $ifmatch | return
  :Quit | return
  :Nick | if ($hget(theme,SndNick)) splay $ifmatch | return
  :Action | if ($hget(theme,SndAction)) splay $ifmatch | return
  :ActionSelf | if ($hget(theme,SndActionSelf)) splay $ifmatch | return
  :SndRaw | if ($hget(theme,SndRaw)) splay $ifmatch | return
  :rawmode | if ($hget(theme,SndUserMode)) splay $ifmatch | return
  :ctcp | if ($hget(theme,Sndctcp)) splay $ifmatch | return

  :SndNotify | if ($hget(theme,$1)) splay $ifmatch | return
  :SndUNotify | if ($hget(theme,$1)) splay $ifmatch | return
  :SndDCC | if ($hget(theme,$1)) splay $ifmatch | return
  :SndDialog | if ($hget(theme,$1)) splay $ifmatch | return
  :SndAway | if ($hget(theme,$1)) splay $ifmatch | return
  :SndBack | if ($hget(theme,$1)) splay $ifmatch | return
  :SndPager | if ($hget(theme,$1)) splay $ifmatch | return

  :%snd_event | return 
}

alias -l thmset set -u0 %::nick $nick | set -u0 %::address $address | set -u0 %::me $me | set -u0 %::chan $chan | set -u0 %::text $1-

on ^*:TEXT:*:#: {
  haltdef
  thmset $1-
  set -u0 %:echo echo $color(normal text) $iif(%option.timestamp,-t) $chan
  set -u0 %::cmode $iif($nick isowner $chan,.,$iif($nick isop $chan,@,$iif($nick isvoice $chan,+)))
  %:echo $$thm($hget(theme,TextChan))
}

on ^*:TEXT:*:?: {
  haltdef
  thmset $1-
  set -u0 %:echo echo $color(normal text) $iif(%option.timestamp,-t) $nick
  %:echo $$thm($hget(theme,TextQuery))
}

on ^*:NOTICE:*:#: {
  haltdef
  thmset $1-
  set -u0 %:echo echo $color(notice text) $iif(%option.timestamp,-t) $chan
  %:echo $$thm($hget(theme,NoticeChan))
  :end
}

on ^*:NOTICE:*:?: {
  haltdef
  thmset $1-
  set -u1 %:echo echo $color(notice text) -a $+ $iif(%option.timestamp,t)
  %:echo $$thm($hget(theme,Notice))
}

on *:INPUT:#: {
  if ($left($1,1) != /) {
    haltdef | thmset $1-
    set -u0 %:echo echo $color(own text) $iif(%option.timestamp,-t) $chan
    set -nu0 %::text $1-
    set -u0 %::cmode $iif($me isowner $chan,.,$iif($me isop $chan,@,$iif($me isvoice $chan,+)))
    %:echo $$thm($hget(theme,TextChanSelf))
    .msg # $1-
  }
}

on *:INPUT:?: {
  if ($left($1,1) != /) {
    haltdef | thmset $1-
    set -u0 %:echo echo $color(own text) $iif(%option.timestamp,-t) $target
    set -nu0 %::text $1-
    %:echo $$thm($hget(theme,TextQuerySelf))
    .msg $target %::text
  }
}

on ^*:ACTION:*:#: {
  thmset $1-
  set -u0 %:echo echo $color(action text) $iif(%option.timestamp,-t) $chan
  %:echo $$thm($hget(theme,ActionChan))
}

on ^*:ACTION:*:?: {
  thmset $1-
  %:echo $$thm($hget(theme,ActionQuery))
}

on ^*:JOIN:#: {
  haltdef 
  Xupdatenl
  thmset $1-
  set -u0 %:echo echo $color(join text) $iif(%option.timestamp,-t) $chan
  if ($nick == $me) %:echo $$thm($hget(theme,JoinSelf))
  else %:echo $$thm($hget(theme,Join))
}

on ^*:PART:#: {
  haltdef
  thmset $1- 
  set -u0 %:echo echo $color(part text) $iif(%option.timestamp,-t) $chan
  if ($1) { set -u0 %::text $1- | set -u0 %::parentext $$thm($hget(theme,parentext)) }
  %:echo $$thm($hget(theme,Part))
}

on ^*:QUIT: {
  haltdef
  thmset $1-
  set -u0 %:echo echo $color(quit text) $iif(%option.timestamp,-t)
  $iif(%mts_sound,mts_sfx)
  if ($1) { set -u0 %::text $1- | set -u0 %::parentext $$thm($hget(theme,parentext)) }
  var %i = 1
  while ($comchan($nick,%i)) {
    set -u0 %::chan $ifmatch
    %:echo %::chan $$thm($hget(theme,quit))
    inc %i
  }
}

on ^*:NICK: {
  haltdef 
  thmset $1-
  set -u0 %::newnick $newnick
  if ($newnick == $me) {
    var %i = 1
    while ($chan(%i)) {       
      set -u0 %:echo echo $color(nick text) $iif(%option.timestamp,-t) $chan(%i)
      %:echo $$thm($hget(theme,nick))
      inc %i
    }
    set -u0 %:echo echo $color(nick text) -s $+ $iif(%option.timestamp,t)
    %:echo $$thm($hget(theme,nickself))
  }
  else {
    var %i = 1
    while ($comchan($newnick,%i)) {       
      set -u0 %:echo echo $color(nick text) $iif(%option.timestamp,-t) $comchan($newnick,%i)
      %:echo $$thm($hget(theme,nick))
      inc %i
    }
  }
}

on ^*:RAWMODE:#: {
  haltdef
  Xupdatenl
  thmset $1-
  if ($1 != $chan) {
    set -u0 %:echo echo $color(mode text) $iif(%option.timestamp,-t) $chan
    set -u0 %::modes $1-
    %:echo $$thm($hget(theme,modeuser))
  }
  else {
    set -u0 %:echo echo $color(mode text) $iif(%option.timestamp,-t) $chan
    set -u0 %::modes $1-
    %:echo $$thm($hget(theme,mode))
  }
}

on ^*:KICK:#: {
  haltdef 
  thmset $1-
  set -u0 %:echo echo $color(kick text) $iif(%option.timestamp,-t) $chan
  set -u0 %::knick $knick
  if ($1) { set -u0 %::text $1- | set -u0 %::parentext $$thm($hget(theme,parentext)) }
  %:echo $$thm($hget(theme,kick))
  set -u0 %:echo echo $color(kick text) -s $+ $iif(%option.timestamp,t) $chan
  if ($knick == $me) %:echo $$thm($hget(theme,kickself))

}

on ^*:TOPIC:#: {
  haltdef 
  thmset $1-
  set -u0 %:echo echo $color(topic text) $iif(%option.timestamp,-t) $chan
  %:echo $$thm($hget(theme,topic))
}

on ^*:INVITE:#: {
  haltdef 
  thmset $1-
  set -u0 %:echo echo $color(invite text) -s $+ $iif(%option.timestamp,t)
  %:echo $$thm($hget(theme,invite))
}

on ^*:ERROR: {
  haltdef
  thmset $1-
  set -u0 %:echo echo $color(info text) -s $+ $iif(%option.timestamp,t)
  %:echo $$thm($hget(theme,ServerError))
}

alias notice {
  set -u0 %::me $me
  if ($left($1,1) == $chr(35)) {
    set -u0 %:echo echo $color(notice text) $iif(%option.timestamp,-t) $1
    set -u0 %::me $me
    set -u0 %::chan $1
    set -u0 %::text $2-
    %:echo $$thm($hget(theme,NoticeSelfChan))
  }
  else {
    set -u0 %:echo echo $color(notice text) $iif(%option.timestamp,-t)
    set -u0 %::me $me
    set -u0 %::nick $1
    set -u0 %::text $2-
    %:echo $$thm($hget(theme,NoticeSelf))
  }
  .notice $1-
}

alias me Xdescribe $active $1-

alias Action Xdescribe $active $1-

alias Xdescribe {
  if ($left($1,1) == $chr(35)) {
    set -u0 %:echo echo $color(action text) $iif(%option.timestamp,-t) $1
    set -u0 %::me $me
    set -u0 %::chan $1
    set -nu0 %::text $2-
    %:echo $$thm($hget(theme,ActionChanSelf))
  }
  else {
    set -u0 %:echo echo $color(action text) $iif(%option.timestamp,-t) $1
    set -u0 %::me $me
    set -nu0 %::nick $1
    set -u0 %::text $2-
    %:echo $$thm($hget(theme,ActionQuerySelf))
  }
  .!describe $1-
  $iif(%mts_sound,mts_sfx actionself)
}

alias amsg {
  var %input = $xreplace($1-)
  set -nu0 %::text %input
  var %i = 1 | while ($chan(%i)) {
    haltdef | thmset $1-
    set -u0 %:echo echo $color(own text) $iif(%option.timestamp,-t) $chan(%i)
    %:echo $$thm($hget(theme,TextChanSelf))
    inc %i
  } 
  .!amsg %input
}
alias ame var %i = 1 | while ($chan(%i)) { Xdescribe $ifmatch $1- | inc %i }

alias dns {
  set -u0 %:echo echo $color(other text) -s $+ $iif(%option.timestamp,t) 
  if (. isin $1) set -u0 %::address $1
  else set -u0 %::nick $1
  %:echo $$thm($hget(theme,DNS))
  .dns $1- 
}

on 1:ctcpreply:*: {
  haltdef
  set -u0 %:echo echo $color(ctcp text) -s $+ $iif(%option.timestamp,t)
  set -u0 %::nick $nick
  set -u0 %::ctcp $1
  set -u0 %::address $address
  set -u0 %::text $2-
  %:echo $$thm($hget(theme,CTCPreply))
  halt
}

alias ctcpreply {
  set -u0 %:echo echo $color(ctcp text) -s $+ $iif(%option.timestamp,t)
  set -u0 %::nick $1
  set -u0 %::me $me
  set -u0 %::ctcp $2
  set -u0 %::text $3-
  if ($show) %:echo $$thm($hget(theme,CTCPreplySelf))
  .ctcpreply $1-
}

raw 001:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::text $1- | %:echo $$thm($hget(theme,RAW.001))
raw 002:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set %::server $server | set -u0 %::value $1- | %:echo $$thm($hget(theme,RAW.002))
raw 003:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $1- | %:echo $$thm($hget(theme,RAW.003))
raw 005:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::text $1- | %:echo $$thm($hget(theme,RAW.005))
raw 250:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $2 | %:echo $$thm($hget(theme,RAW.250))
raw 251:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::users $4 | set -u0 %::text $7 | set -u0 %::value $9 | %:echo $$thm($hget(theme,RAW.251))
raw 252:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $2 | %:echo $$thm($hget(theme,RAW.252))
raw 253:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $2 | %:echo $$thm($hget(theme,RAW.253))
raw 254:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $2 | %:echo $$thm($hget(theme,RAW.254))
raw 255:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::users $4 | set -u0 %::value $7 | %:echo $$thm($hget(theme,RAW.255))
raw 265:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::users $5 | set -u0 %::value $7 | %:echo $$thm($hget(theme,RAW.265))
raw 266:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::users $5 | set -u0 %::value $7 | %:echo $$thm($hget(theme,RAW.266))
raw 302:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::nick $nick | set -u0 %::address $address | %:echo $$thm($hget(theme,RAW.302))
raw 315:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.315))
raw 324:*: haltdef | XupdateNL | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | set -u0 %::modes $3- | %:echo $$thm($hget(theme,RAW.324))
raw 332:*: haltdef | set -u0 %:echo !echo $color(info2 text) $iif(%option.timestamp,-t) $2 | set -u0 %::chan $2 | set -u0 %::topic $3- | set -u0 %::text $3- | %:echo $$thm($hget(theme,RAW.332)) | halt
raw 333:*: haltdef | set -u0 %:echo !echo $color(info2 text) $iif(%option.timestamp,-t) $2 | set -u0 %::nick $3 | set -u0 %::text $asctime($4-) | %:echo $$thm($hget(theme,RAW.333))
raw 341:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $chan | set -u0 %::nick $nick | %:echo $$thm($hget(theme,RAW.341))
raw 352:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::nick $2 | set -u0 %::address $3 | set -u0 %::cmode $5 | set -u0 %::away $4 | set -u0 %::chan $1 | set -u0 %::realname $6  | set -u0 %::text $1- | %:echo $$thm($hget(theme,RAW.352))
raw 353:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $3 | set -u0 %::text $4- | %:echo $$thm($hget(theme,RAW.353))
raw 366:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.366))
raw 375:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | %:echo $$thm($hget(theme,RAW.375))
raw 372:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::text $2- | %:echo $$thm($hget(theme,RAW.372))
raw 376:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | %:echo $$thm($hget(theme,RAW.376))
raw 391:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $3- | %:echo $$thm($hget(theme,RAW.391))
raw 401:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::nick $2 | %:echo $$thm($hget(theme,RAW.401))
raw 403:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.403))
raw 404:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.404))
raw 421:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::value $2 | %:echo $$thm($hget(theme,RAW.421))
raw 433:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::nick $2 | %:echo $$thm($hget(theme,RAW.433))
raw 471:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.471))
raw 473:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.473))
raw 474:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.474))
raw 475:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.475))
raw 482:*: haltdef | set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::chan $2 | %:echo $$thm($hget(theme,RAW.482))
raw 301:*: haltdef | if ($2 == $me) halt | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::text $3- | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.301))
raw 311:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::address $3 $+ @ $+ $4 | set %::realname $6 | %:echo $$thm($hget(theme,raw.311))
raw 314:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::address $3 $+ @ $+ $4 | set %::realname $6 | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.314))
raw 319:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::chan $3- | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.319))
raw 320:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.320))
raw 312:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::wserver $3 | set %::serverinfo $4- | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.312))
raw 317:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::idletime $duration($3) | set %::signontime $time($4,dd/mm/yy hh:nn:ss) | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.317))
raw 318:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.318)) | else { %:echo $$thm($hget(theme,whois)) | unset %::text | unset %::nick | unset %::address | unset %::wserver | unset %::realname | unset %::serverinfo | unset %::isoper | unset %::isregd | unset %::signontime | unset %::idletime | unset %:echo }
raw 313:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::isoper $3 | set %::operline $4- | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.313))
raw 307:*: haltdef | set %:echo !echo $color(whois text) -a $+ $iif(%option.timestamp,t) | set %::nick $2 | set %::isregd $3- | if (!$hget(theme,whois)) %:echo $$thm($hget(theme,raw.307))


;raw *:*: haltdef | if (!$hget(theme,raw. $+ $numeric)) { set -u0 %:echo !echo $color(info2 text) -s $+ $iif(%option.timestamp,t) | set -u0 %::text $2- | %:echo $$thm($hget(theme,RAW.Other)) }


on *:DNS: {
  haltdef
  set -u0 %:echo echo $color(other text) -s $+ $iif(%option.timestamp,t)
  set -u0 %::iaddress $iaddress
  set -u0 %::address $address
  set -u0 %::raddress $raddress
  if (!$raddress) %:echo $$thm($hget(theme,DNSError))
  else %:echo $$thm($hget(theme,DNSResolve))
  halt
}



ctcp *:*:*: {
  set -u0 %:echo echo $color(ctcp text) -s $+ $iif(%option.timestamp,t)
  set -u0 %::nick $nick
  set -u0 %::ctcp $1    
  set -u0 %::address $address
  set -u0 %::text $2-
  if ($1 == DCC) && ($istok(CHAT.SEND.RESUME,$2,46)) goto end
  else {
    haltdef
    if ($left($1,1) == $chr(35)) %:echo $$thm($hget(theme,CTCPchan))
    else %:echo $$thm($hget(theme,CTCP))
    .ctcpreply $nick $1
  }
  :end
}


raw 0:*: {
  haltdef
  set -u0 %::nick $nick
  set -u0 %::address $address
  set -u0 %:echo echo $color(other text) $iif(%option.timestamp,-t) $1 | set -u0 %::chan $1 | set %::value $2 | set -u0 %::text $3-
  if ($2 == OWNERKEY) { %:echo $$thm($hget(theme,raw.000)) | halt }
  if ($2 == HOSTKEY) { %:echo $$thm($hget(theme,raw.000)) | halt } 
  if ($1 ischan) && ($2 == ONPART) { %:echo $$thm($hget(theme,raw.000)) | halt }
  if ($1 ischan) && ($2 == ONJOIN) { %:echo $$thm($hget(theme,raw.000)) | halt }
  %:echo $$thm($hget(theme,raw.000))
}


alias Xmsg thmset $2- | var %::text = $iif(c isin $gettok($chan($1).mode,1,32),$strip($2-),$2-) | .msg $1 %::text | set -u0 %::chan $1 | set -u0 %:echo echo $color(own text) $iif(%option.timestamp,-t) $1 | %:echo $$thm($hget(theme,TextChanSelf))
alias say .!msg $active $1- | set -u0 %::me $me | set -u0 %::chan $active | set %::text $1- | set -u0 %:echo echo $color(own text) $iif(%option.timestamp,-t) $active | %:echo $$thm($hget(theme,TextChanSelf)) 


; HennesScript <NW> Options
;

alias hMTSe { Xdialog -m DLGoptions DLGoptions | if ($1) did -c DLGoptions $1 }

dialog DLGoptions {
  title "Options"
  size -1 -1 305 168
  option dbu
  tab "Themes", 10, 3 1 298 149
  box "Themes settings", 141, 9 17 117 127, tab 10
  link "Open theme folder", 148, 46 54 65 9, tab 10
  check "Timestamp enabled", 146, 16 132 63 8, disable tab 10
  edit "", 147, 13 73 109 54, tab 10 read multi return vsbar
  combo 142, 41 28 79 209, tab 10 size vsbar drop
  text "Scheme:", 1, 14 40 25 8, tab 10
  combo 11, 41 40 79 433, tab 10 size vsbar drop
  text "Theme:", 5, 14 29 25 8, tab 10
  box "", 6, 129 17 167 127, tab 10
  tab "Windows XP", 7, disable
  text "Specify which window skin you are using:", 8, 9 31 108 8, tab 7
  radio "Classical windows", 9, 16 41 75 10, tab 7
  radio "Window XP skin", 12, 16 49 50 10, tab 7
  text "Configure adjustment (default is 7):", 13, 10 68 84 8, tab 7
  edit "7", 14, 93 67 18 10, tab 7 center
  button "Cancel", 2, 223 154 38 12, cancel
  button "OK", 3, 180 154 40 12, default ok
  button "Apply", 4, 263 154 39 12
}


on *:DIALOG:DLGoptions:sclick:193: load_sel_themes | show_theme

alias -l load_sel_themes {
  did -r $dname 142 
  var %x = $findfile(themes\,*.mts,0,3,did -a $dname 142 $remove($nopath($1-),.mts)) 
  var %i = 1 
  while ($did(DLGoptions,142,%i).text) { if ($did(DLGoptions,142,%i).text $+ .mts == $nopath(%cache.last_mts_theme)) did -c DLGoptions 142 %i | inc %i }
  did -ra $dname 141 Themes ( $+ $did(DLGoptions,142).lines $+ )
}

on *:DIALOG:DLGoptions:sclick:12: XP.adjust
on *:DIALOG:DLGoptions:sclick:9: XP.adjust

alias -l XP.adjust {
  set %XP $did(DLGoptions,12).state
  set %XP.adjust $did(DLGoptions,14)  
}

on *:DIALOG:DLGoptions:init:*:{ 
  if ($os == XP) did -e DLGoptions 7
  else did -b DLGoptions 7
  if (%XP) did -c DLgoptions 12  
  else did -c DLgoptions 9
  did -ra DLGoptions 14 %XP.adjust

  load_sel_themes 
  var %i = 1
  while ($did($dname,142,%i)) { if ($did($dname,142,%i) == $remove($nopath(%cache.last_mts_theme),.mts)) did -c $dname 142 %i | inc %i }
  if ($gettok(%option.nospam.ignore,1,32)) did -c $dname 194
  did -ra $dname 11 (Default)
  did -c $dname 11 1
  var %x = $did($dname,142).seltext $+ .mts
  var %x = $findfile(themes\,%x,1,3)
  did -b $dname 11
  var %i = 0 
  while ($gettok($read(%x,w,scheme*,%i),2-,32)) {
    did -a $dname 11 $gettok($read(%x,w,scheme*,%i),2-,32)
    did -e $dname 11
    var %i = $calc($readn + 1)
  }
  did -c $dname 11 %cache.scheme
  .timerX -m 1 100 show_theme
}


alias show_theme {
  unset %thm_*
  set -u0 %thm_ $+ $read -wNAME* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wVERSION* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wAUTHOR* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wEMAIL* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wDESCRIPTION* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wVERSION* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wMTSVERSION* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  set -u0 %thm_ $+ $read -wWEBSITE* $findfile(themes\,*.mts,$did(DLGoptions,142).sel,3)
  did -ra DLGoptions 147 Theme name: %thm_name $crlf
  did -a DLGoptions 147 Author: %thm_author $crlf
  did -a DLGoptions 147 E-mail: %thm_email $crlf
  did -a DLGoptions 147 Website: %thm_website $crlf
  did -a DLGoptions 147 Theme version: %thm_version $crlf
  did -a DLGoptions 147 MTS version: %thm_mtsversion $crlf
  did -a DLGoptions 147 Description: %thm_description $crlf
  mts.preview %cache.last_mts_theme
  .timerPREVIEW -m 0 100 update_window 
}

alias update_window {
  if ($appactive) && (!%app) { set %app 1 | window -a @MTS }
  elseif (%app) && (!$appactive) { set %app 0 | window -h @MTS }
  if ($dialog(DLGoptions)) window @MTS $calc($dialog(DLGoptions).x + 262) $calc($dialog(DLGoptions).y + 63 $iif(%XP,+ $+ %XP.adjust)) 331 245
  else { window -c @MTS | .timerPREVIEW off | unset %app }

}

on *:DIALOG:DLGoptions:sclick:142: { 
  unset %thm_*
  set -u0 %thm_ $+ $read -wNAME* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wVERSION* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wAUTHOR* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wEMAIL* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wDESCRIPTION* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wVERSION* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wMTSVERSION* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  set -u0 %thm_ $+ $read -wWEBSITE* $findfile(themes\,*.mts,$did($dname,142).sel,3)
  did -ra $dname 147 Theme: %thm_name (v $+ %thm_version $+ ) $crlf
  did -a $dname 147 Author: %thm_author ( $+ %thm_email $+ ) $crlf
  did -a $dname 147 Homepage: %thm_website $crlf
  did -a $dname 147 MTS version: %thm_mtsversion $crlf
  did -a $dname 147 Description: %thm_description
  did -b $dname 11
  did -ra $dname 11 (Default)
  did -c $dname 11 1
  var %x = $did($dname,142).seltext $+ .mts
  var %x = $findfile(themes\,%x,1,3)
  var %i = 0 
  while ($gettok($read(%x,w,scheme*,%i),2-,32)) {
    did -a $dname 11 $gettok($read(%x,w,scheme*,%i),2-,32)
    did -e $dname 11
    var %i = $calc($readn + 1)
  }
  mts.preview " $+ $findfile(themes\,*.mts,$did($dname,142).sel,3) $+ "
}

on *:DIALOG:DLGoptions:sclick:11: mts.preview " $+ $findfile(themes\,*.mts,$did($dname,142).sel,3) $+ " $+ $calc($did($dname,11).sel - 1) $+ "

on *:DIALOG:DLGoptions:sclick:146: set %option.timestamp $did(DLGoptions,146).state | show_theme

on *:DIALOG:DLGoptions:sclick:3: Options_apply | dialog -x DLGoptions
on *:DIALOG:DLGoptions:sclick:4: Options_apply
on *:DIALOG:DLGoptions:sclick:148: .run themes

alias Options_apply {
  set %XP $did(DLGoptions,12).state
  set %XP.adjust $did(DLGoptions,14)  
  if ($did($dname,142).seltext != $remove($nopath(%cache.last_mts_theme),.mts) || (%cache.scheme != $did($dname,11).sel)) {   
    var %x = $did($dname,142).seltext $+ .mts
    var %x = $findfile(themes\,%x,1,3)
    theme.load " $+ %x $+ "
    if ($did($dname,11) != (Default)) theme.load " $+ %x $+ " $calc($did($dname,11).sel - 1)
    set %cache.scheme $did($dname,11).sel
  }
  hsave -o theme mts.has
}

alias Xdialog if ($dialog($2)) dialog -v $2- | else dialog $1-

menu menubar {
  Themes...: hMTSe
}

alias Xupdatenl {
  if ($1 == 1) {
    var %i = 1 
    while ($chan(%i)) { 
      var %i2 = 1 
      while ($nick($chan(%i),%i2)) { 
        if ($nick($chan(%i),%i2) isvo $chan(%i)) cline -l %nicklist.color.voice $chan(%i) %i2 
        if ($nick($chan(%i),%i2) isop $chan(%i)) cline -l %nicklist.color.host $chan(%i) %i2 
        if ($nick($chan(%i),%i2) isowner $chan(%i)) cline -l %nicklist.color.owner $chan(%i) %i2 
        if ($nick($chan(%i),%i2) !isop $chan(%i)) && ($nick($chan(%i),%i2) !isvo $chan(%i)) cline -l %nicklist.color.regular $chan(%i) %i2 
        if ($nick($chan(%i),%i2) == $me) cline -l %nicklist.color.own $chan(%i) %i2 
        inc %i2
      } 
      inc %i 
    }
  }
  else {
    var %i = 1 
    while ($nick($1,%i)) { 
      if ($nick($1,%i) isvo $1) cline -l %nicklist.color.voice $1 %i
      if ($nick($1,%i) isop $1) cline -l %nicklist.color.host $1 %i 
      if ($nick($1,%i) isowner $1) cline -l %nicklist.color.owner $1 %i 
      if ($nick($1,%i) !isop $1) cline -l %nicklist.color.regular $1 %i 
      if ($nick($1,%i) == $me) cline -l %nicklist.color.own $1 %i 
      inc %i 
    }
  }
}

; HennesScript NW
; MTS theme preview

alias mts.preview {
  set %mts.x $gettok($1-,1,34) 
  if ($window(@MTS)) clear @MTS
  else window -pado +dL @MTS $calc($dialog(DLGoptions).x + 262) $calc($dialog(DLGoptions).y + 63 $iif(%XP,+ $+ %XP.adjust)) 331 245
  if ($window(@MTS).state == hidden) window -a @MTS
  set %c.bg $iif($gettok($gettok($read(%mts.x,w,Colors*),2-,32),1,44),$ifmatch,$gettok($gettok($colorsDef,2-,32),1,44))
  if ($gettok($1-,2,34)) {
    var %s = [SCHEME $+ $gettok($1-,2,34) $+ $chr(93)
    var %n = $read(%mts.x,w,%s)
    set %n $readn
    if ($gettok($gettok($read(%mts.x,w,Colors*,%n),2-,32),1,44)) set %c.bg $ifmatch
  }

  if ($gettok($read(%mts.x,w,MTSversion*),2-,32) == 1.0) {
    if ($gettok($read(%mts.x,w,timestamp*),2-,32) == OFF) { set %pre.stamp 0 | did -c DLGoptions 146 }
    else { set %pre.stamp 1 | did -c DLGoptions 146 | set %now.stamp $gettok($read(%mts.x,w,timestamp*),2-,32) }
  }
  if ($gettok($read(%mts.x,w,MTSversion*),2-,32) > 1.0) {
    if ($gettok($read(%mts.x,w,timestamp*),2-,32) == ON) { set %pre.stamp 1 | did -c DLGoptions 146 }
    else { set %pre.stamp 0  | did -u DLGoptions 146 }
    set %now.stamp $gettok($read(%mts.x,w,timestampformat*),2-,32)
  }

  ; set RGB colors
  set %RGB %RGBdef
  if ($read(%mts.x,w,RGBcolors*)) set %RGB $ifmatch
  if ($gettok($1-,2,34)) && ($read(%mts.x,w,RGBcolors*,%n) != $null) set %RGB $read(%mts.x,w,RGBcolors*,%n)
  ; draw background
  set %l $gettok($gettok(%RGB,2-,32),$calc(%c.bg +1),32)
  if (!%l) set %l 255,255,255
  drawfill -r @MTS $rgb( [ [ %l ] ] ) $rgb( [ [ %l ] ] ) 0 0
  if ($read(%mts.x,w,ImageChan*) != $null) { 
    set %y " $+ $nofile($1-) $+ $gettok($read(%mts.x,w,ImageChan*),3-,32) $+ "
    var %style = $gettok($read(%mts.x,w,ImageChan*),2,32)
    if (%style = normal) drawpic @MTS 0 0 %y 
    if (%style = photo) drawpic @MTS $calc(331 - $pic(%y).width) 0 %y 
    if (%style = center) drawpic @MTS $calc((331 - $pic(%y).width)/2) $calc((245 - $pic(%y).height)/2) %y
    if (%style = fill) drawpic -s @MTS 0 0 331 245 %y
    if (%style = stretch) drawpic -s @MTS 0 $calc((245 - ($pic(%y).height * $calc(331 / $pic(%y).width)))/2) 331 $calc(($pic(%y).height * $calc(331 / $pic(%y).width))) %y
    if (%style = tile) {
      var %c = $calc(245 / $pic(%y).height) | var %d = 0 | var %e = 0 
      while (%e < %c) {
        var %a = $calc(331 / $pic(%y).width) | var %b = 0 | var %i = 0
        while (%i < %a) { drawpic @MTS %b %d %y | inc %b $pic(%y).width | inc %i }
        inc %d $pic(%y).height | inc %e
      }
    }
  }
  if ($gettok($1-,2,34)) {
    if ($read(%mts.x,w,ImageChan*,%n) != $null) { 
      set %y " $+ $nofile($1-) $+ $gettok($read(%mts.x,w,ImageChan*,%n),3-,32) $+ "
      var %style = $gettok($read(%mts.x,w,ImageChan*,%n),2,32)
      if (%style = normal) drawpic @MTS 0 0 %y 
      if (%style = photo) drawpic @MTS $calc(331 - $pic(%y).width) 0 %y 
      if (%style = center) drawpic @MTS $calc((331 - $pic(%y).width)/2) $calc((245 - $pic(%y).height)/2) %y
      if (%style = fill) drawpic -s @MTS 0 0 331 245 %y
      if (%style = stretch) drawpic -s @MTS 0 $calc((245 - ($pic(%y).height * $calc(331 / $pic(%y).width)))/2) 331 $calc(($pic(%y).height * $calc(331 / $pic(%y).width))) %y
      if (%style = tile) {
        var %c = $calc(245 / $pic(%y).height) | var %d = 0 | var %e = 0 
        while (%e < %c) {
          var %a = $calc(331 / $pic(%y).width) | var %b = 0 | var %i = 0
          while (%i < %a) { drawpic @MTS %b %d %y | inc %b $pic(%y).width | inc %i }
          inc %d $pic(%y).height | inc %e
        }
      }
    }
  }

  ; set font-height
  set %f $height(x,$gettok($gettok($read(%mts.x,w,FontChan*),2-,32),1,44),$gettok($gettok($read(%mts.x,w,FontChan*),2-,32),2,44))
  elseif (%f < 1) set %f 9
  set %g 0

  ; set basecolors
  set %:::c1 %::c1
  set %::c1 $gettok($gettok($read(%mts.x,w,BaseColors*),2-,32),1,44)
  set %:::c2 %::c2
  set %::c2 $gettok($gettok($read(%mts.x,w,BaseColors*),2-,32),1,44)
  set %:::c3 %::c3
  set %::c3 $gettok($gettok($read(%mts.x,w,BaseColors*),2-,32),3,44)
  set %:::c4 %::c4
  set %::c4 $gettok($gettok($read(%mts.x,w,BaseColors*),2-,32),4,44)

  ; set prefix
  set %:::pre %::pre
  set %::pre $dll(mtsgen.dll,MTSEvalString,$gettok($read(%mts.x,w,Prefix*),2-,32))


  ; load script (if any)
  set %h 0
  if ($gettok($read(%mts.x,w,SCRIPT*),2-,32)) { set %:::loaded_theme %::loaded_theme | .timerK -m 1 1 .reload -rs " $+ $nofile(%mts.x) $+ $ifmatch " | set %::loaded_theme " $+ $nofile(%mts.x) $+ $ifmatch " | set %h 1 }

  if ($gettok($1-,2,34)) {
    ; set font-height
    if ($height(x,$gettok($gettok($read(%mts.x,w,FontChan*,%n),2-,32),1,44),$gettok($gettok($read(%mts.x,w,FontChan*,%n),2-,32),2,44))) set %f $ifmatch
    elseif (%f < 1) set %f 9
    set %g 0

    ; set basecolors
    set %:::c1 %::c1
    if ($gettok($gettok($read(%mts.x,w,BaseColors*,%n),2-,32),1,44)) set %::c1 $ifmatch
    set %:::c2 %::c2
    if ($gettok($gettok($read(%mts.x,w,BaseColors*,%n),2-,32),2,44)) set %::c2 $ifmatch
    set %:::c3 %::c3
    if ($gettok($gettok($read(%mts.x,w,BaseColors*,%n),2-,32),3,44)) set %::c3 $ifmatch
    set %:::c4 %::c4
    if ($gettok($gettok($read(%mts.x,w,BaseColors*,%n),2-,32),4,44)) set %::c4 $ifmatch

    ; set prefix
    set %:::pre %::pre
    set %::pre $dll(mtsgen.dll,MTSEvalString,$gettok($read(%mts.x,w,Prefix*),2-,32))
    if ($gettok($read(%mts.x,w,Prefix*,%n),2-,32)) set %::pre $dll(mtsgen.dll,MTSEvalString,$gettok($read(%mts.x,w,Prefix*,%n),2-,32))

    ; load script (if any)
    set %h 0
    if ($gettok($read(%mts.x,w,SCRIPT*,%n),2-,32)) { .timerK -m 1 1 .reload -rs " $+ $nofile(%mts.x) $+ $ifmatch $+ " | set %h 1 }
  }

  ; set colors
  set %oldcolors $null
  var %i = 0 | while (%i != 16) { set %oldcolors %oldcolors $rgb( [ [ $color(%i) ] ] ) | inc %i }
  var %i = 0 | while (%i != 16) { color %i [ [ $rgb( [ [ $gettok($gettok(%RGB,2-,32),$calc(%i +1),32)) ] ] ) ] ] | inc %i }


  ; show preview
  .timerL -m 1 100 mts.activate.preview %mts.x
}

alias mts.activate.preview {
  set %colors $read(%mts.x,w,Colors*)
  if ($gettok($1-,2,34)) set %colors $read(%mts.x,w,Colors*,%n)
  ; draw JoinSelf
  set -u0 %::nick $iif($me,$me,HENNESSY)
  set -u0 %::address someone@somedns.com
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),8,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre JoinSelf

  ; draw Topic is...
  set -u0 %::address another@who.com
  set -u0 %::topic Welcome in the preview channel!
  set -u0 %::text Welcome in the preview channel!
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),19,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre Raw.332

  ; draw Set by...
  set -u0 %::nick HENNESSY
  set -u0 %::text $asctime($ctime)
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),19,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre Raw.333


  ; draw TextChanSelf
  set -u0 %::me $iif($me,$me,HENNESSY)
  set -u0 %::address someone@somdns.com
  set -u0 %::cmode $null
  set -u0 %::text hello
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),16,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wTextChanSelf* %mts.x != $null)  mts.draw.pre TextChanSelf

  ; draw ModeUser
  set -u0 %::nick Johhny
  set -u0 %::address another@who.com
  set -u0 %::cmode @ 
  set -u0 %::modes +o $iif($me,$me,HENNESSY) 
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),10,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wModeUser* %mts.x != $null)  mts.draw.pre ModeUser

  ; draw Whois 311
  set %::nick Johnny | set %::address another@who.com | set %::realname Johnny the last
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wRAW.311* %mts.x != $null) mts.draw.pre raw.311
  else goto whois

  ; draw Whois 317
  set %::nick Johnny | set %::idletime $duration(123) | set %::signontime $time($ctime,dd/mm/yy hh:nn:ss) 
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wRAW.317* %mts.x != $null) mts.draw.pre raw.317

  ; draw Whois 312
  set %::nick Johnny | set %::wserver irc.server.com | set %::serverinfo IRC server
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wRAW.312* %mts.x != $null) mts.draw.pre raw.312

  ; draw Whois 301
  set %::nick Johnny | set %::text watching a movie
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wRAW.301* %mts.x != $null) mts.draw.pre raw.301  

  ; draw Whois 318
  set %::nick Johnny
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wRAW.318* %mts.x != $null) mts.draw.pre raw.318
  goto nowhois

  :whois
  set %::nick Johnny | set %::address another@who.com | set %::realname Johnny the last
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),21,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  if ($read -wWhois* %mts.x != $null) mts.draw.pre Whois

  :nowhois

  ; draw Join
  set -u0 %::nick Bill
  set -u0 %::address gates@microsoft.com
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),8,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre Join

  ; draw NoticeChan
  set -u0 %::nick Bill
  set -u0 %::address gates@microsoft.com
  set -u0 %::chan #preview
  set -u0 %::text Bill Gates is in the house! :)
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),13,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre NoticeChan

  ; draw Part
  set -u0 %::text $null
  set -u0 %::nick Bill
  set -u0 %::address gates@microsoft.com
  set -u0 %::chan #preview

  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),17,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre Part

  ; draw TextChan
  set -u0 %::nick l33t_guy
  set -u0 %::address i.am.so.lame@lamest.com
  set -u0 %::cmode +
  set -u0 %::text I am flooding! I am flooding! I am flooding! I am flooding!
  set -u0 %::chan #preview
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),12,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre TextChan

  ; draw quit
  set -u0 %::nick l33t_guy
  set -u0 %::address i.am.so.lame@lamest.com
  set -u0 %::chan #preview
  set -u0 %::text flooding
  set -u0 %::parentext $dll(mtsgen.dll,MTSEvalString,$gettok($read(%mts.x,w,ParenText*),2-,32))
  var %m = $gettok($gettok(%RGB,3-,32),$gettok($gettok(%colors,2-,32),17,44),32)
  set %:echo Xdrawtext -rbp @MTS $rgb( [ [ %m ] ] ) $rgb( [ [ %l ] ] ) $mts.get.font 0
  mts.draw.pre Quit

  ; update colors (why doesnt this fucking shit work?!)

  ; var %i = 0 | while (%i != 15) { drawreplace -r @MTS [ [ $color(%i) ] ] [ [ $rgb( [ [ $gettok($gettok(%RGB,2-,32),$calc(%i +1),32)) ] ] ) ] ] | inc %i }
  ; drawreplace -r @MTS [ [ $color(15) ] ] [ [ $rgb( [ [ $gettok(%RGB,17,32) ] ] ) ] ] 

  ; set back basecolors and prefix
  set %::c1 %:::c1
  set %::c2 %:::c2
  set %::c3 %:::c3
  set %::c4 %:::c4
  set %::pre %:::pre

  ; unload script (if any)
  if (%h) { .unload -rs %::loaded_theme | set %::loaded_theme %:::loaded_theme }

  ; set back colors

  var %i = 0 | while (%i != 16) { color %i $rgb( [ [ $gettok(%oldcolors,$calc(%i +1),32)) ] ] ) | inc %i }

  ; unset settings
  unset %m
  unset %l
  unset %RGB
  unset %:::*
  unset %::realname
  unset %::idletime
  unset %::signontime
  unset %::wserver
  unset %::serverinfo
  unset %::isregd
  unset %::isoper
  unset %::operline
  unset %o
  unset %p
  unset %q
  unset %r
  unset %t
  unset %f
  unset %g
  unset %h
  unset %c.bg
  unset %y
  unset %pre.stamp
  unset %now.stamp
}

alias mts.get.font {
  if ($gettok($gettok($read(%mts.x,w,FontChan*),2-,32),1,44)) set %o $ifmatch
  else set %o Verdana
  if ($left(%o,1) != ") set %o " $+ %o $+ "
  if ($gettok($gettok($read(%mts.x,w,FontChan*),2,32),2,44)) set %p $ifmatch
  else set %p 13
  set %q $calc($gettok(%o,0,32) - 1)
  return %o %p
}

alias Xdrawtext { 
  set %r 1- $+ $calc(7 + %q)
  set %t $calc(8 + %q) $+ -
  .drawtext $gettok($1-,%r,32) %g $iif(%pre.stamp,$asctime($ctime,%now.stamp)) $gettok($1-,%t,32) | inc %g $calc(%f +3)
}

alias mts.draw.pre {
  var %z = $dll(mtsgen.dll,MTSEvalString,$gettok($read(%mts.x,w,$1 $+ *),2-,32))
  if (%z = mtsgen.dll MTSEvalString) return
  ; echo -s z = %z
  if (%z) {
    if ($gettok(%z,1,32) == !script) $gettok(%z,2-,32)
    else %:echo %z
  }
}
