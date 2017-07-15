;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; MTS loader 1.71 by Snake ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Dialogs

dialog mts {
  title "MTS loader 1.71"
  size -1 -1 449 245
  option pixels
  list 1, 4 0 148 189, size
  text "Scheme:", 3, 8 193 48 16
  combo 4, 58 191 94 200, size drop
  text "Preview: None", 12, 162 10 148 16
  icon 14, 158 40 290 147
  button "Preview", 16, 325 8 60 20
  button "Larger", 17, 385 8 60 20
  button "Load", 20, 343 222 50 20
  button "Unload", 21, 395 222 50 20
  text "No preview generated at the moment", 22, 166 98 276 16, center
  button "", 41, 0 0 0 0, hide ok
  check "Accurate preview (slower)", 42, 162 192 280 20
  edit "", 5, 160 2 285 2
  edit "", 13, 160 32 285 2
  edit "", 15, 4 216 441 2
  menu "File", 6
  item "Add", 7, 6
  item "Edit", 8, 6
  item "Remove", 9, 6
  item break, 18, 6
  item "Add folder", 26, 6
  item "Clear list", 27, 6
  item break, 10, 6
  item "Info", 19, 6
  item break, 28, 6
  item "Close", 11, 6
  menu "Options", 2
  menu "Set path to", 35, 2
  item "MDX", 39, 35
  item "Popups", 40, 35
  item break, 36, 2
  item "Destroy previews", 37, 2
  item "Preview on click", 23, 2
  item "Clear windows on load/unload", 29, 2
  item "Minimize windows on load", 38, 2
  item break, 24, 2
  item "Advanced", 25, 2
  menu "Help", 30
  item "Readme", 32, 30
  item "Contents", 31, 30
  item break, 33, 30
  item "About", 34, 30
}
dialog mtsinfo {
  title "MTS loader 1.71 - Info"
  size -1 -1 151 113
  option dbu
  edit "", 1, 2 3 145 1
  text "Info on theme: N/A", 2, 4 5 145 8
  edit "", 3, 2 14 145 1
  text "Name: N/A", 4, 4 19 141 8
  text "Author: N/A", 5, 4 29 141 8
  text "URL:", 7, 4 50 15 8
  link "N/A", 8, 22 49 123 8
  text "MTS Version: N/A", 9, 4 59 141 8
  text "Description:", 10, 4 69 42 8
  edit "N/A", 11, 2 79 147 32, read multi autovs
  text "E-Mail:", 12, 4 39 20 8
  link "N/A", 6, 25 39 120 8
  button "", 13, 0 0 0 0, hide ok
}

dialog mtsopt {
  title "MTS loader 1.71 - Advanced options"
  size -1 -1 125 131
  option dbu
  edit "", 1, 2 3 120 1
  text "When loading themes, apply:", 2, 4 6 90 8
  edit "", 3, 2 16 120 1
  check "Pictures", 4, 4 19 63 10
  check "Colors", 5, 4 27 50 10
  check "Fonts", 6, 4 35 50 10
  check "Nick colors", 7, 74 27 50 10
  check "Timestamp", 8, 74 19 50 10
  edit "", 9, 2 48 120 1
  text "When a theme is loaded, hide:", 10, 4 51 90 8
  edit "", 11, 2 61 120 1
  check "Welcome messages", 13, 4 64 62 10
  check "Stats (/lusers)", 14, 4 72 60 10
  check "Nicks (/names)", 15, 74 64 64 10
  check "Channel info", 16, 74 73 48 10
  edit "", 17, 2 85 120 1
  button "Ok", 18, 65 120 28 9, ok
  button "Cancel", 19, 94 120 28 9, cancel
  edit "", 21, 2 98 120 1
  combo 22, 59 102 50 100, size drop
  button "", 23, 111 102 10 10
  check "Use custom nicklist colors", 20, 4 88 95 8
  text "Status:", 25, 4 103 19 8
  edit "", 26, 2 116 120 1
}

dialog preaux {
  title "MTS loader 1.71"
  size -1 -1 175 61
  text "", 1, 25 9 120 16, center
  text "", 2, 9 33 152 16
  button "", 3, 0 0 0 0, hide Ok
}

dialog lpre {
  title "MTS loader 1.71"
  size -1 -1 518 342
  option pixels
  edit "", 1, 4 8 510 2
  text "Preview:", 2, 8 14 216 16, disable
  edit "", 3, 4 34 510 2
  icon 4, 9 41 499 295
  button "", 5, 0 0 0 0, hide ok
}

dialog colors {
  title "Colors"
  size -1 -1 96 34
  option dbu
  button "", 1, 4 7 10 10
  button "", 2, 15 7 10 10
  button "", 3, 26 7 10 10
  button "", 4, 37 7 10 10
  button "", 5, 48 7 10 10
  button "", 6, 59 7 10 10
  button "", 7, 70 7 10 10
  button "", 8, 81 7 10 10
  button "", 9, 4 18 10 10
  button "", 10, 15 18 10 10
  button "", 11, 26 18 10 10
  button "", 12, 37 18 10 10
  button "", 13, 48 18 10 10
  button "", 14, 59 18 10 10
  button "", 15, 70 18 10 10
  button "", 16, 81 18 10 10
  box "", 17, 2 0 92 4
  box "", 18, 2 28 92 4
  button "", 19, 0 0 0 0, hide result
  button "", 20, 0 0 0 0, hide ok
}

;; Events

on *:dialog:mts:*:*: { 
  if ($devent == init) {
    setmtsmdx
    mtsmdx SetControlMDX $dname 1 listview rowselect report single showsel > $mtsviews
    mtsmdx SetBorderStyle $dname 16,17 clientedge
    mtsmdx SetBorderStyle $dname 5,13,15 staticedge
    mtsmdx SetFont $dname 12 ANSI 13 700 Tahoma
    did -i $dname 1 1 headerdims 127
    did -i $dname 1 1 headertext Themes:
    did -b mts 12
    var %i = 1
    while ($read($mtspath(mts.tl),n,%i)) {
      if ($isfile($read($mtspath(mts.tl),n,%i))) {
        did -a mts 1 $nopath($read($mtspath(mts.tl),n,%i))
        inc %i
      }
      else write -dl %i $mtspath(mts.tl)
    }
    if ($did(mts,1,2)) {
      did -c mts 1 2
      dm 1
    }
    if ($isfile($mtsret(main,preview))) {
      var %t = $mtsret(main,preview)
      showpre " $+ %t $+ "
      if ($didwm($dname,1,* 0 0 0 $deltok($nopath(%t),-1,45),1)) {
        did -c $dname 1 $v1
        dm $calc($v1 - 1)
        var %t = $remlast($gettok($nopath(%t),-1,45),4)
        did -c $dname 4 $iif(%t == mts,1,$calc($remove(%t,scheme) + 1))
      }
    }
    else did -b mts 37
    mtsinil click 23
    mtsinil clear 29
    mtsinil minimize 38
    mtsinil accurate 42
    if (!$mtsh(current)) did -b mts 21
  }
  elseif ($devent == sclick) {
    if ($did == 1) && ($did(mts,1).sel) {
      var %t = $gettok($did(mts,1,1).text,1,32)
      if (%t == item) {
        dm $calc($did(mts,1).sel - 1)
        if ($did(mts,23).state) mtspre $mpre(small)
      }
      elseif (%t == rclick) mtspop
    }
    elseif ($did == 4) && ($did(mts,1).sel) && ($did(mts,23).state) mtspre $mpre(small)
    elseif ($did == 16) {
      if ($did(mts,1).sel) mtspre $mpre(small)
    }
    elseif ($did == 17) && ($did(mts,1).sel) mtspre $mpre(large)
    elseif ($did == 20) && ($did(mts,1).sel) mtsload $sch $read($mtspath(mts.tl),n,$calc($did(mts,1).sel - 1))
    elseif ($did == 21) mtsunload
    elseif ($did == 42) writeini $mtspath(mts.ini) main accurate $did(mts,42).state
  }
  elseif ($devent == menu) {
    if ($did == 7) mtsadd
    elseif ($did == 8) mtsedit
    elseif ($did == 9) mtsdel
    elseif ($did == 19) {
      if ($did(mts,1).sel) mtsinfo $+(",$read($mtspath(mts.tl),n,$calc($did(mts,1).sel - 1)),")
    }
    elseif ($did == 11) dialog -x mts
    elseif ($did == 25) mtsopt
    elseif ($did == 26) {
      var %dir = $$sdir(mts,Chosse a folder containing MTS themes,Ok)
      var %i = 1
      var %f2 = $mtspath(mts.tl)
      while ($findfile(%dir,*.mts,%i)) {
        var %f = $v1
        if (!$read(%f2,wn,%f)) {
          write %f2 %f
          did -a mts 1 $nopath(%f)
        }
        inc %i
      }
      if ($did(mts,1,2)) {
        did -c mts 1 %i
        dm $calc($did(mts,1).sel - 1)
      }
    }
    elseif ($did == 27) {
      write -c $mtspath(mts.tl)
      did -r mts 1,4
      clearinfo
    }
    elseif ($did == 39) setmdxpath
    elseif ($did == 40) setpoppath
    elseif ($did == 23) mtsini click 23
    elseif ($did == 29) mtsini clear 29
    elseif ($did == 38) mtsini minimize 38
    elseif ($did == 37) {
      did -ra mts 12 Preview: None
      did -b mts 37
      while ($findfile($scriptdir $+ large,*,1)) .remove " $+ $v1 $+ "
      while ($findfile($scriptdir $+ small,*,1)) .remove " $+ $v1 $+ "
      did -h mts 14
      did -v mts 22
    }
    elseif ($did == 32) run notepad.exe $mtspath(readme.txt)
    elseif ($did == 31) mtshelp
    elseif ($did == 34) var %n = $input(MTS loader 1.71 written by SolidSnake,oi,MTS loader)
  }
}

on *:dialog:mtsinfo:*:*: { 
  if ($devent == init) {
    setmtsmdx
    mtsmdx SetFont $dname 2 ANSI 13 700 Tahoma
    mtsmdx SetBorderStyle $dname 1,3,11 staticedge
    did -b mtsinfo 2
  }
  elseif ($devent == sclick) {
    if ($did == 6) run mailto: $+ $did(mtsinfo,6).text
    elseif ($did == 8) {
      var %t = $did(mtsinfo,8).text
      run $iif(http:// isin %t,%t, http:// $+ %t)
    }
  }
}

on *:dialog:mtsopt:*:*: { 
  if ($devent == init) {
    setmtsmdx
    mtsmdx SetControlMDX $dname 23 Text > $mtsctl_gen
    mtsmdx SetBorderStyle $dname 23 clientedge
    mtsmdx SetBorderStyle $dname 1,3,9,11,17,21,26 staticedge
    mtsmdx SetFont $dname 2,10 ANSI 13 700 Tahoma
    did -b mtsopt 2,10
    optaux2 yourself
    optaux2 owner
    optaux2 admin
    optaux2 op
    optaux2 hop
    optaux2 voice
    optaux2 regular
    optaux2 notify
    optaux2 protect
    optaux2 autoop
    optaux2 autovoice
    optaux2 ignore
    did -c mtsopt 22 1
    optaux3 yourself
    optaux pictures 4
    optaux colors 5
    optaux fonts 6
    optaux nicks 7
    optaux timestamp 8
    optaux welcome 13
    optaux lusers 14
    optaux names 15
    optaux chaninfo 16
    optaux nickcolors 20
  }
  elseif ($devent == sclick) {
    if ($did == 22) optaux3 $did($did).seltext
    elseif ($did == 23) {
      var %c = $stdc
      var %t = $did(mtsopt,22).seltext
      hadd mtsopt %t %c
      optaux3 %t
    }
    elseif ($did == 18) {
      optaux4 pictures 4
      optaux4 colors 5
      optaux4 fonts 6
      optaux4 nicks 7
      optaux4 timestamp 8
      optaux4 welcome 13
      optaux4 lusers 14
      optaux4 names 15
      optaux4 chaninfo 16
      optaux4 nickcolors 20
      optaux5 yourself
      optaux5 owner
      optaux5 admin
      optaux5 op
      optaux5 hop
      optaux5 voice
      optaux5 regular
      optaux5 notify
      optaux5 protect
      optaux5 autoop
      optaux5 autovoice
      optaux5 ignore
    }
  }
}

on *:dialog:preaux:*:*:{
  if ($devent == init) {
    setmtsmdx
    mtsmdx SetControlMDX $dname 2 progressbar smooth > $mtsctl_gen
  }
}

on *:dialog:lpre:init:*:{
  setmtsmdx
  mtsmdx SetBorderStyle $dname 1,3 staticedge
  mtsmdx SetFont $dname 2 ANSI 13 700 Tahoma
}

on *:dialog:colors:*:*: { 
  if ($devent == init) {
    setmtsmdx
    mtsmdx SetBorderStyle $dname 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 clientedge
    mtsmdx SetControlMDX $dname 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 Text > $mtsctl_gen
    mtsmdx SetDialog $dname style 0 title
    var %i = 1
    while (%i <= 16) {
      mtsmdx SetColor $dname %i background $color($calc(%i - 1))
      inc %i
    }
  }
  elseif ($devent == sclick) {
    if ($did >= 1) && ($did <= 16) {
      did -a $dname 19 $calc($did - 1)
      dialog -k colors
    }
  }
}

on *:START:{
  if (!$isdir($scriptdir $+ small)) .mkdir " $+ $scriptdir $+ small $+ "
  if (!$isdir($scriptdir $+ large)) .mkdir " $+ $scriptdir $+ large $+ "
  hmake mts 20
  hload mts $mtspath(mts.ah)
  if ($isfile($mtsh(script))) && (!$script($mtsh(script))) .load -rs $shortfn($mtsh(script))
  if ($mtsh(timestampformat)) .timestamp -f $v1
}

on *:LOAD:{
  echo -s This is MTS loader v1.71 written by SolidSnake (liquidsnake@sapo.pt)
  echo -s type /mts to display the main MTS loader dialog box
  echo -s To know more about this theme loader and it's commands available, type /mtshelp
  if ($version != 6.16) echo -s This addon is meant to mIRC 6.16. It may not work as it should on this version ( $+ $version $+ )
  writeini $mtspath(mts.ini) main mdx $remove($scriptdir,$mircdir) $+ MDX\
  writeini $mtspath(mts.ini) main popups $remove($scriptdir,$mircdir) $+ popups.dll
}

on *:UNLOAD:mtsunload

on *:EXIT:{
  if ($mtsh(timestampformat)) {
    hadd mts timestampformat $timestampfmt
    hsave -o mts $mtspath(mts.ah)
  }
}

on ^&*:CHAT:*:{
  if ($mts.event(textquery)) {
    mtsvars echo $color(normal) -mlt = $+ $nick
    set -nu %::nick $nick
    set -nu %::address $iif($address,$v1,N/A)
    set -nu %::text $1-
    set -u %::cnick $ncolor($nick)
    set -nu %::nick $+(,%::cnick,$nick,)
    theme.text
  }
}

on ^&*:TEXT:*:*:mts.tan $1-

on ^&*:ACTION:*:*:mts.tan $1-

on ^&*:NOTICE:*:*:mts.tan $1-

on &*:INPUT:?:mts.inp $1-

on &*:INPUT:=:mts.inp $1-

on &*:INPUT:#:{
  if ($gettok($readini(mirc.ini,options,n1),23,44)) && ($2) && ($left($1,1) == !) && ($remfirst($1,1) ison $chan) {
    msg $v1 $1-
    halt
  }
  mts.inp $1-
}

on ^*:NOTIFY:uno

on ^*:UNOTIFY:uno

on ^&*:JOIN:#:tjp $event $+ $iif($nick == $me,self)

on ^&*:PART:#:if ($nick != $me) tjp $event $1-

on ^&*:NICK:{
  if ($mts.event($iif($nick == $me,nickself,nick))) {
    set -nu %::nick $nick
    set -nu %::newnick $newnick
    set -nu %::address $iif($address,$v1,N/A)
    loopt $newnick
  }
}

on ^&*:QUIT:{
  if ($mts.event(quit)) {
    set -nu %::nick $nick
    set -nu %::address $iif($address != $null,$v1,N/A)
    set -nu %::text $1-
    loopt $nick
  }
}

ctcp &*:*:*:{
  if ($mts.event($iif($chan,ctcpchan,ctcp))) {
    if ($1 == VERSION) || ($1 == DCC) || ($1 == SOUND) return
    mtsvars echo $color(ctcp) - $+ $iif($mts.onactive(ctcps),$mts.as,s) $+ t
    set -nu %::nick $nick
    set -nu %::address $iif($address,$v1,N/A)
    set -nu %::chan $chan
    set -nu %::ctcp $1
    set -nu %::text $2-
    if ($1 == PING) set -un %reply $2-
    elseif ($1- == TIME) set -un %reply $fulldate
    elseif ($1- == FINGER) set -un %reply $fullname ( $+ $emailaddr $+ ) Idle $idle second(s) $readini(mirc.ini,text,finger)
    if (%reply) .ctcpreply $nick $1 %reply
    theme.text
  }
}

on &*:CTCPREPLY:*:{
  if ($mts.event(ctcpreply)) {
    mtsvars echo $color(ctcp) - $+ $iif($mts.onactive(ctcps),$mts.as,s) $+ t
    set -nu %::nick $nick
    set -nu %::chan $chan
    set -nu %::ctcp $1
    if ($1 == ping) set -nu %::text $calc($ctime - $2) sec(s)
    else set -nu %::text $2-
    theme.text
  }
}

on &*:DNS:{
  var %t = $iif($dns(0) > 0,dnsresolve,dnserror)
  if ($mts.event(%t)) {
    mtsvars echo $color(other) - $+ $mts.as
    if (%t == dnsresolve) {
      var %i = 1
      while ($dns(%i)) {
        set -nu %::nick $dns(%i).nick
        set -nu %::address $dns(%i)
        set -nu %::iaddress $dns(%i).ip
        set -nu %::naddress $dns(%i).addr
        set -nu %::raddress $remtok(%::iaddress %::naddress,%::address,1,32)
        theme.text
        inc %i
      }
    }
    else {
      set -nu %::address $address
      set -nu %::iaddress $iaddress
      set -nu %::raddress $raddress
      set -nu %::naddress $naddress
      theme.text
    }
  }
}


on ^&*:USERMODE:{
  if ($mts.event(modeuser)) {
    mtsvars echo $color(mode) -s
    set -nu %::nick $nick
    set -nu %::modes $1-
    theme.text
  }
}

on ^&*:ERROR:*:{
  if ($mts.event(servererror)) {
    mtsvars echo $color(info) -st
    set -nu %::text $1-
    theme.text
    halt
  }
}

on ^&*:INVITE:#:{
  if ($mts.event($event)) {
    mtsvars echo $color(invite) - $+ $iif($mts.onactive(invites),$mts.as,s) $+ t
    set -nu %::nick $nick
    set -nu %::address $iif($address != $null,$v1,N/A)
    set -nu %::chan $chan
    set -nu %::text $1-
    theme.text
  }
}

on ^&*:SNOTICE:*:{
  if ($mts.event(noticeserver)) {
    mtsvars echo $color(info) -st
    set -nu %::nick $nick
    set -nu %::address $iif($address != $null,$v1,N/A)
    set -nu %::text $1-
    theme.text
  }
}

on ^&*:WALLOPS:*:{
  if ($mts.event($event)) {
    mtsvars echo  $color(wallops) -st
    set -nu %::nick $nick
    set -nu %::address $iif($address != $null,$v1,N/A)
    set -nu %::text $1-
    theme.text
  }
}

on ^&*:RAWMODE:#:{
  if ($mts.event(mode)) {
    var %t = $mtsplace(mode)
    if (%t == 2) halt 
    elseif (%t == 1) var %t = echo $color(mode) -ts
    else var %t = echo $color(mode) -t $chan
    mtsvars %t
    set -u %::nick $nick
    set -u %::address $iif($address,$v1,N/A)
    set -u %::chan $chan
    set -u %::modes $1-
    theme.text
  }
}

on ^&*:TOPIC:#:{
  if ($mts.event($event)) {
    var %t = $mtsplace($event)
    if (%t == 2) halt 
    elseif (%t == 1) var %t = echo $color(topic) -ts
    else var %t = echo $color(topic) -t $chan
    mtsvars %t
    set -u %::nick $nick
    set -u %::address $iif($address,$v1,N/A)
    set -u %::chan $chan
    set -u %::text $1-
    theme.text
  }
}

on ^&*:KICK:#:{
  var %t = $iif($knick == $me,kickself,$event)
  if ($mts.event(%t)) {
    var %m = $mtsplace($event)
    if (%m == 2) halt 
    elseif (%m == 1) var %m = echo $color(kick) -ts
    else var %m = echo $color(kick) $iif(%t == kickself,$iif($window($chan),-t $chan,-st),-t $chan)
    mtsvars %m
    set -u %::nick $nick
    set -u %::address $iif($address,$v1,N/A)
    set -u %::chan $chan
    set -u %::knick $knick
    set -u %::kaddress $iif($address($knick,5),$v1,N/A)
    set -u %::text $1-
    theme.text
  }
}

raw 001:*:{
  if ($gettok($readini(mirc.ini,options,n1),11,44) == 1) hadd -m motd $cid 1
  if ($mtsret(options,lusers)) hadd -m lusers $cid 1
  raw.aux -s $2-
}

raw 372:*:raw.aux6 $1-

raw 377:*:raw.aux6 $1-

raw 378:*:raw.aux6 $1-

raw 375:*:raw.aux6 $1-

raw 376:*:{
  if ($hget(motd,$cid)) {
    hdel motd $cid
    halt
  }
  raw.aux -s $2-
}

raw 474:*:raw.aux -s $2-

raw 421:*:raw.aux -s $2-

raw 315:*:raw.aux -s $2-

raw 367:*:raw.aux -s $2-

raw 368:*:raw.aux -s $2-

raw 366:*:{
  if ($hget(join,names. $+ $2 $+ $cid) == 1) && ($mtsh(current)) {
    hdel join names. $+ $2 $+ $cid
    halt
  }
  if ($hget(join,chaninfo. $+ $2 $+ $cid) == 1) && ($mtsh(current)) {
    hdel join chaninfo. $+ $2 $+ $cid
    halt
  }
  raw.aux -s $2-
}

raw 332:*:{
  if ($halted) return
  if ($hget(join,$+(topic.,$2,$cid))) halt
  if ($mts.event(raw.332)) || ($mts.event(raw.other)) {
    mtsvars echo $color(join) -t $2  $+ $chr(9) $+ $3-
    set -u %::chan $2
    set -u %::nick $2
    set -u %::nick $2
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 352:*:{
  if ($halted) return
  if ($mts.event(raw.352)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::nick $6
    set -u %::address $3 $+ @ $+ $4
    set -u %::wserver $5
    set -u %::away $iif(h isin $7,h,g)
    set -u %::cmode $iif(. isin $7,.,$iif(@ isin $7,@,$iif(% isin $7,%,$iif(+ isin $7,+))))
    set -u %::isoper is $iif(* !isin $7,not)
    set -u %::value $8
    set -u %::realname $9-
    set -u %::text $3-
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 333:*:{
  if ($halted) return
  if ($hget(join,$+(topic.,$2,$cid))) {
    hdel join $+(topic.,$2,$cid)
    halt
  }
  if ($mts.event(raw.333)) || ($mts.event(raw.other)) {
    mtsvars echo $color(join) -t $2 $+ $chr(9) $+ $2-
    set -u %::nick $3
    set -u %::value $4
    set -u %::text $asctime($4)
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 353:*:{
  if ($halted) return
  if ($hget(join,names. $+ $3 $+ $cid)) halt
  if ($mts.event(raw.353)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::chan $3
    set -u %::text $4-
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 329:*:{
  if ($halted) return
  if ($mtsret(options,chaninfo)) halt
  if ($mts.event(raw.329)) || ($mts.event(raw.other)) {
    mtsvars echo $color(join) -t $2 $+ $chr(9) $+ $2-
    set -u %::value $3
    set -u %::text $asctime($3)
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 324:*:{
  if ($halted) return
  if ($mtsret(options,chaninfo)) halt
  if ($mts.event(raw.324)) || ($mts.event(raw.other)) {
    mtsvars echo $color(join) -t $2 $+ $chr(9) $+ $2-
    set -u %::modes $3-
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 341:*:{
  if ($halted) return
  if ($mts.event(raw.341)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::nick $2
    set -u %::chan $3
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 251:*:{
  if ($halted) return
  if ($hget(lusers,$cid)) halt
  if ($mts.event(raw.251)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::users $4
    set -u %::text $6
    set -u %::value $11
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 255:*:raw.aux2 3 6 $2-

raw 265:*:raw.aux2 4 6 $2-

raw 266:*:raw.aux2 4 6 $2-

raw 302:*:{
  if ($halted) return
  if ($mts.event(raw.302)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::nick $remove($gettok($2,1,61),-,*)
    set -u %::address $remove($gettok($2,2,61),-,*)
    theme.text $+(raw.,$numeric)
    halt
  }
}

raw 311:*:raw.aux5 $1-

raw 314:*:raw.aux5 $1-

raw 301:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.301)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),raw.301)) {
      var %t = $hget($+(whois.,$2,$cid),311)
      mtsvars echo $color(whois) - $+ $iif(!%t && $query($active) && $mts.onactive(away),a,$iif($mts.onactive(whois) && %t,$mts.as,s)) $+ $chr(9) $+ $3-
      set -u %::nick $2
      set -u %::away $3-
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 307:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.307)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric is
    if ($mtsget($mtsh(current),raw.307)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::isregd is
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 317:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.317)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),raw.317)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::idletime $3
      set -u %::signontime $asctime($4)
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 319:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.319)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $hget($+(whois.,$2,$cid),$numeric) $numeric $3-
    if ($mtsget($mtsh(current),raw.319)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::chan $3-
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 312:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.312)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),raw.312)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::wserver $3
      set -u %::serverinfo $4-
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 313:*:{
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw.313)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),raw.313)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::isoper is
      set -u %::operline $3-
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

raw 316:*:raw.aux3 $1-

raw 330:*:raw.aux3 $1-

raw 309:*:raw.aux3 $1-

raw 308:*:raw.aux3 $1-

raw 379:*:raw.aux3 $1-

raw 310:*:raw.aux3 $1-

raw 441:*:raw.aux4 $1-

raw 443:*:raw.aux4 $1-

raw 318:*:aux.318.369 $1-

raw 369:*:aux.318.369 $1-

raw *:*:{
  if ($halted) return
  if ($hget(lusers,$cid)) && ($numeric >= 252) && ($numeric <= 254) && ($mtsh(current)) halt
  if (!$istok(600.601.602.603.604.605.606.321.322.323.364.365,$numeric,46)) raw.aux -s $2-
}

;; Commands & identifiers

alias mts if (!$dialog(mts)) dialog -m mts mts

alias -l stdc return $dialog(colors,colors)

alias -l mtsmdx dll " $+ $mtsret(main,mdx) $+ mdx.dll $+ " $1-

alias -l mtsviews return $mtsret(main,mdx) $+ views.mdx

alias -l mtsctl_gen return $mtsret(main,mdx) $+ ctl_gen.mdx

alias setmtsmdx {
  mtsmdx SetMircVersion $version
  mtsmdx MarkDialog $dname $dialog($dname).hwnd
}

alias mtspopups  {
  var %t = $mtsret(main,popups)
  if ($isid) return $dll(%t,$1,$2)
  else dll " $+ %t $+ " $1-
}

alias -l remfirst return $right($1,$calc($len($1) - $2))

alias -l remlast return $left($1,$calc($len($1) - $2))

alias mtsinfo {
  if (!$dialog(mtsinfo)) dialog -hm mtsinfo mtsinfo  
  did -ra mtsinfo 2 Info on theme: $nopath($1-)
  did -ra mtsinfo 4 Name: $mtsinfo.aux($1-,name) $mtsget($1-,version)
  did -ra mtsinfo 5 Author: $mtsinfo.aux($1-,author)
  did -ra mtsinfo 6 $mtsinfo.aux($1-,email)
  did -ra mtsinfo 8 $mtsinfo.aux($1-,website)
  did -ra mtsinfo 9 MTS Version: $mtsinfo.aux($1-,mtsversion)
  did -ra mtsinfo 11 $mtsinfo.aux($1-,description)
}

alias mtsopt if (!$dialog(mtsopt)) dialog -hm mtsopt mtsopt

alias -l mtsadd {
  var %dir = $$sfile(mts\ $+ *.mts,Choose an MTS theme,Ok)
  if (!$read($mtspath(mts.tl),wn,%dir)) {
    write $mtspath(mts.tl) %dir
    did -ac mts 1 $nopath(%dir)
    dm $calc($did(mts,1).sel - 1)
  }
}

alias -l mtsedit if ($did(mts,1).sel) .run notepad.exe $read($mtspath(mts.tl),n,$calc($v1 - 1))

alias -l mtsdel {
  if ($did(mts,1).sel) {
    var %t = $v1
    did -d mts 1 %t
    write -dl $calc(%t - 1) $mtspath(mts.tl)
    if ($did(mts,1,2)) {
      if ($did(mts,1).lines >= %t) did -c mts 1 %t
      else did -c mts 1 $calc(%t - 1)
      dm $calc($did(mts,1).sel - 1)
    }
    else clearinfo
  }
}

alias country {
  if ($1) {
    if ($readini($mtspath(country.ini),country,$gettok($1,-1,46))) return $v1
    elseif ($gettok($1,1,46) == 127) return Fake Host
    elseif ($remove($1,.) isnum) return Numeric IP
    else return N/A
  }
}

alias mts.version return 1.3

alias -l mtsget {
  if ($2) {
    var %t = $iif($3,ns,s)
    if ($1 isnum) return $read($read($mtspath(mts.tl),$1),%t,$2)
    else return $read($1,%t,$2)
  }
}

alias mtshelp run $mtspath(contents.htm)

alias mtspre {
  if ($isfile($3-)) {
    var %fpreview = $mtspath($1 $+ \ $+ $nopath($3-) $+ - $+ $2 $+ .bmp)
    if ($isfile(%fpreview)) {
      $iif($1 == small,showpre,showprel) %fpreview
      return
    }
    dialog -hm preaux preaux
    did -a preaux 1 Loading MTS preview
    mtssch $2-
    if ($isfile($mtspath(preview.mts))) .remove $mtspath(preview.mts)
    .savebuf @mtsp1 $mtspath(preview.mts)
    window -c @mtsp1
    if ($window(@mtsp2)) window -c @mtsp2
    var %f = $shortfn($mtspath(preview.mts))
    set -u %p.colors $mtsget(%f,colors)
    if (!%p.colors) set -u %p.colors $cdef
    set -u %p.basecolors $mtsget(%f,basecolors)
    set -u %p.rgbcolors $mtsget(%f,rgbcolors)
    if (!%p.rgbcolors) set -u %p.rgbcolors $rgbdef
    set -u %p.fontchan $mtsget(%f,fontchan)
    set -u %p.clinecharop $mtsget(%f,clinecharop)
    set -u %p.clinecharvoice $mtsget(%f,clinecharvoice)
    set -u %p.parentext $mtsget(%f,parentext)
    set -u %p.clineme $mtsget(%f,clineme)
    set -u %p.clineop $mtsget(%f,clineop)
    set -u %p.clinevoice $mtsget(%f,clinevoice)
    if ($mtsget(%f,basecolors)) {
      set -u %::c1  $+ $gettok(%p.basecolors,1,44)
      set -u %::c2  $+ $gettok(%p.basecolors,2,44)
      set -u %::c3  $+ $gettok(%p.basecolors,3,44)
      set -u %::c4  $+ $gettok(%p.basecolors,4,44)
    }
    set -u %p.script $shortfn($nofile($3-) $+ $mtsget(%f,script))
    set -u %::pre $mtspre.aux($mtsget(%f,prefix))
    set -u %::parentext $mtspre.aux($mtsget(%f,parentext))
    set -u %::timestamp $mtspre.aux($mtsget(%f,timestamp))
    set -u %::timestampformat $time($mtspre.aux($mtsget(%f,timestampformat)))
    if ($isfile(%p.script)) && (!$script(%p.script)) {
      .load -rs %p.script
      var %unload = 1
    }
    if (%::timestamp != off) && (%::timestamp != on) && (%::timestamp) set -u %::timestampformat $time(%::timestamp)
    if (!%::timestampformat) set -u %::timestampformat $time((HH:nn))
    set -u %pre.ts $iif(%::timestamp,$v1,off)
    set -u %::timestamp %::timestampformat
    if ($window(@pretext)) window -c @pretext
    window -h @pretext
    set -u %::me $+(,%p.clineme,$me,)
    set -u %::chan #anaconda
    set -u %::nick Fre–
    set -u %::address MTS@loader.pt
    set -u %::text See you later!
    set -u %::modes +v $me
    set -u %::ctcp PING
    mtspre.aux2 8 joinself %f * Now talking in #anaconda
    mtspre.aux2 8 join %f * Fre– has joined #anaconda
    mtspre.aux2 17 part %f * Fre– has left #anaconda
    set -u %::nick Snake
    mtspre.aux2 10 mode %f * Snake sets mode: +v $me
    set -u %::nick $+(,%p.clineop,SolidSnake)
    set -u %::cmode $iif(%p.clinecharop,$+(,$v1,),@)
    set -u %::text Grettings my friend
    mtspre.aux2 12 textchan %f <Snake> %::text
    set -u %::nick $+(,%p.clineop,LordNykon)
    set -u %::text getting boring from this channel
    mtspre.aux2 2 actionchan %f * LordNykon %::text
    set -u %::nick [47]
    set -u %::text $ctime
    mtspre.aux2 3 ctcp %f [[47] PING]
    set -u %::cmode $iif(%p.clinecharvoice,$+(,$v1,),+)
    set -u %::text What channel is this?
    mtspre.aux2 16 textchanself %f < $+ $me $+ > %::text
    set -u %::text Quit: Anything that can go wrong, will go wrong
    mtspre.aux2 18 quit %f * [47] has quit IRC ( $+ %::text $+ )
    set -u %::nick [MissManson]
    set -u %::chan #hot
    mtspre.aux2 7 invite %f * [MissManson] invites you to join #hot
    set -u %::nick Lazarus
    set -u %::text Hello, why don't you join #burro?
    mtspre.aux2 13 notice %f - $+ Lazarus $+ - %::text
    if ($1 != small) {
      set -u %::nick Snake
      set -u %::newnick SolidSnake
      set -u %::chan #anaconda
      set -u %::text I don't like your nick!
      mtspre.aux2 9 kickself %f * You were kicked from #anaconda by Snake ( $+ %::text $+ )
      mtspre.aux2 8 joinself %f * Rejoined channel #anaconda
      mtspre.aux2 11 nick %f * Snake is now known as SolidSnake
      set -u %::text MTS loader 1.71 for mIRC 6.16
      set -u %::nick SolidSnake
      mtspre.aux2 19 topic %f * SolidSnake changes topic to ' $+ %::text $+ '
      set -u %::value SolidSnake
      set -u %::fromserver $nick
      set -u %::isoper is not
      set -u %::isregd is not
      set -u %::realname Classified
      set -u %::country $country(pt)
      set -u %::isregd is
      set -u %::idletime 47
      set -u %::signontime $asctime($ctime)
      set -u %::wserver irc.ptnet.org
      set -u %::serverinfo Portuguese IRC server
      set -u %::isoper is not
      if ($mtsget(%f,whois)) {
        set -u %::numeric 318
        var %p.whois = $theme.parse($v1)
        set -u %:echo aline @pretext 21
        if ($gettok(%p.whois,1,32) == !script) {
          if ($gettok(%p.whois,2-,32)) $v1
        }
        else aline @pretext 21 %p.whois
      }
      else {
        set -u %::numeric 311
        mtspre.aux2 21 raw.311 %f SolidSnake is %::address *  $name
        set -u %::numeric 307
        mtspre.aux2 21 raw.307 %f SolidSnake is a registered and identified nick
        set -u %::numeric 319
        mtspre.aux2 21 raw.319 %f SolidSnake on #anaconda
        set -u %::numeric 312
        mtspre.aux2 21 raw.312 %f SolidSnake using irc.ptnet.org Portuguese IRC server
        set -u %::numeric 317
        mtspre.aux2 21 raw.317 %f SolidSnake has been idle 47secs, signed on %::signontime
        set -u %::numeric 318
        mtspre.aux2 21 raw.318 %f SolidSnake End of /WHOIS list.
      }
    }
    if ($window(@preview)) window -c @preview
    if ($mtsret(main,accurate)) && (%p.rgbcolors) {
      var %i = 0
      while (%i <= 15) {
        var %rgbcurrent = %rgbcurrent $rgb($color(%i))
        inc %i
      }
      loadc1 %p.rgbcolors
      .color -ls mIRC Classic
    }
    window -Bph +d @preview -1 -1 $iif($1 == small,280 146,499 290)
    var %i = 1
    while (%i <= 16) {
      var %c = %c $rgb( [ $mts.namergb($gettok(%p.rgbcolors,%i,32)) ] )
      inc %i
    }
    var %preback = $gettok(%c,$calc($gettok(%p.colors,1,44) + 1),32)
    drawfill -r @preview %preback %preback 1 1
    var %prefont = " $+ $gettok(%p.fontchan,1,44) $+ "
    var %presize = $gettok(%p.fontchan,2,44)
    var %i = 1
    var %l = $line(@pretext,0)
    while ($line(@pretext,%i)) {
      var %precolor = $gettok(%c,$calc($gettok(%p.colors,$gettok($v1,1,32),44) + 1),32)
      var %preline = $gettok($v1,2-,32)
      var %t = $iif(%pre.ts != off,%::timestamp) %preline
      drawtext -rpb @preview %precolor %preback %prefont %presize 3 $iif(%i != 1,$calc(1 + ((%i - 1) * $height(%preline,%prefont,%presize))),1) $iif(%rgbcurrent,%t,$strip(%t,c))
      did -a preaux 2 %i 0 %l
      inc %i
    }
    if (%rgbcurrent) {
      loadc1 $v1
      .color -ls mIRC Classic
    }
    dialog -x preaux
    drawsave @preview %fpreview
    if ($dialog(mts)) && ($1 == small) {
      showpre %fpreview
      did -v mts 14
      did -e mts 37
    }
    else showprel %fpreview
    .remove $mtspath(preview.mts)
    window -c @preview
    window -c @pretext
    if (%unload) .unload -rs %p.script
  }
}

alias mtsload {
  if ($isfile($2-)) {
    if ($mtsget($2-,mtsversion) > $mts.version) {
      var %v = $input(This theme is meant for MTS format $v1 $+ . This theme loader is meant for $mts.version $+ . Procced?,yvq,Clone Scan)
      if (%v == $no) return
    }
    if ($mtsret(main,minimize)) wins -n
    if ($mtsret(main,clear)) clearall
    dialog -hm preaux preaux
    dialog -t preaux MTS load
    did -a preaux 1 Generating source
    current.unload
    mtssch $1-
    if ($isfile($mtspath(current.mts))) .remove $mtspath(current.mts)
    .savebuf @mtsp1 $mtspath(current.mts)
    window -c @mtsp1
    if ($window(@mtsp2)) window -c @mtsp2
    did -a preaux 2 1 0 9
    var %f = $mtspath(current.mts)
    if (!$hget(mts)) hmake mts 20
    if ($load.aux5(colors)) {
      did -ra preaux 1 Loading colors
      hadd mts basecolors $mtsget(%f,basecolors)
      if ($mtsget(%f,rgbcolors)) {
        hadd mts rgbcolors $v1
        loadc1 $mtsh(rgbcolors)
      }
      else rgbrst
      if ($mtsget(%f,colors)) {
        hadd mts colors $v1
        loadc2 $mtsh(colors)
      }
      else colorrst
    }
    else {
      colorrst
      rgbrst
    }
    did -a preaux 2 2 0 9
    clinerst
    did -ra preaux 1 Loading nickcolors
    if ($mtsret(options,nickcolors)) {
      load.aux7 m0 yourself
      load.aux7 om0 autoop
      load.aux7 vm0 autovoice
      load.aux7 pm0 protect
      load.aux7 ym0 notify
      load.aux7 im0 ignore
      load.aux7 m0 owner .
      load.aux7 m0 owner ~
      load.aux7 m0 admin &
      load.aux7 m0 op @
      load.aux7 m0 hop %
      load.aux7 m0 voice +
      load.aux7 m0 regular
    }
    elseif ($load.aux5(nicks)) {
      if ($mtsget(%f,clineme) != $null) .cnick -m0 $!me $v1
      if ($mtsget(%f,clinefriend) != $null) {
        .cnick -om0 * $v1
        .cnick -vm0 * $v1
        .cnick -pm0 * $v1
        .cnick -ym0 * $v1
      }
      if ($mtsget(%f,clineenemy) != $null) .cnick -im0 * $v1
      load.aux6 clineowner . %f
      load.aux6 clineowner ~ %f
      load.aux6 clineop & %f
      load.aux6 clineop @ %f
      load.aux6 clinehop % %f
      load.aux6 clinevoice + %f
      if ($mtsget(%f,clineregular) != $null) .cnick -m0 * $v1
    }
    hadd mts clinecharowner $mtsget(%f,clinecharowner)
    hadd mts clineCharop $mtsget(%f,clinecharop)
    hadd mts clineCharhop $mtsget(%f,clinecharhop)
    hadd mts clineCharvoice $mtsget(%f,clinecharvoice)
    hadd mts clineCharregular $mtsget(%f,clinecharregular)
    did -a preaux 2 3 0 9
    hadd mts pre $load.aux2($mtsget(%f,prefix))
    hadd mts parentext $load.aux2($mtsget(%f,parentext))
    tsrst
    if ($load.aux5(timestamp)) {
      did -ra preaux 1 Loading timestamp
      hadd mts timestamp $mtsget(%f,timestamp)
      hadd mts timestampformat $load.aux2($mtsget(%f,timestampformat))
      .timestamp on
      if ($mtsh(timestamp)) && ($mtsh(timestamp) != on) && ($mtsh(timestamp) != off) {
        hadd mts timestampformat $load.aux2($v1)
        .timestamp -f $mtsh(timestampformat)
      }
      elseif ($mtsh(timestamp) == on) .timestamp -f $iif($mtsh(timestampformat),$v1,[HH:nn])
      else .timestamp off
    }
    did -a preaux 2 4 0 9
    if ($load.aux5(fonts)) {
      did -ra preaux 1 Loading fonts
      var %j = 1
      while ($scon(%j)) {
        scon %j
        if ($mtsget(%f,fontdefault)) {
          hadd mts fontdefault $mtsget(%f,fontdefault)
          .font -s $load.aux3($mtsh(fontdefault))
        }
        else {
          .font -s "fixedsys" 9
          hdel mts fontdefault
        }
        var %t = fixedsys,9
        if ($mtsget(%f,fontchan)) {
          hadd mts fontchan $mtsget(%f,fontchan)
          var %font = $load.aux3($mtsh(fontchan))
        }
        else {
          var %font = $load.aux3(%t)
          hdel mts fontchan
        }
        var %fchannel = $iif($mtsh(fontchan),$v1,%t)
        var %i = 1
        while ($chan(%i)) {
          .font $chan(%i) %font
          inc %i
        }
        if ($mtsget(%f,fontquery)) {
          hadd mts fontquery $mtsget(%f,fontquery)
          var %font = $load.aux3($mtsh(fontquery))
        }
        else {
          var %font = $load.aux3(%t)
          hdel mts fontquery
        }
        var %fquery = $iif($mtsh(fontquery),$v1,%t)
        var %fchat = %fquery
        var %i = 1
        while ($query(%i)) {
          .font $query(%i) %font
          inc %i
        }
        var %i = 1
        while ($chat(%i)) {
          .font = $+ $chat(%i) %font
          inc %i
        }
        inc %j
      }
      remini mirc.ini fonts
      writeini mirc.ini fonts fchannel %fchannel
      writeini mirc.ini fonts fquery %fquery
      writeini mirc.ini fonts fchat %fchat
      .font -s $load.aux3($mtsh(fontdefault))
    }
    else fontrst
    did -a preaux 2 5 0 9
    bgrst
    hadd mts file $remove($2-,$mircdir)
    if ($load.aux5(pictures)) {
      did -ra preaux 1 Loading pictures
      remini mirc.ini background
      var %j = 1
      while ($scon(%j)) {
        scon %j
        hadd mts imagestatus $mtsget(%f,imagestatus)
        if ($mtsh(imagestatus)) background -s $+ $load.aux4($v1)
        hadd mts imagechan $mtsget(%f,imagechan)
        if ($img.aux4($mtsh(imagechan))) {
          var %i = 1
          while ($chan(%i)) {
            background - $+ $img.aux($mtsh(imagechan)) $chan(%i) $img.aux2($mtsh(imagechan))
            inc %i
          }
          writeini mirc.ini background wchannel $img.aux3($mtsh(imagechan))
        }
        hadd mts imagequery $mtsget(%f,imagequery)
        if ($img.aux4($mtsh(imagequery))) {
          var %i = 1
          while ($query(%i)) {
            background - $+ $img.aux($mtsh(imagequery)) $query(%i) $img.aux2($mtsh(imagequery))
            inc %i
          }
          var %i = 1
          while ($chat(%i)) {
            background - $+ $img.aux($mtsh(imagequery)) $+(=,$chat(%i)) $img.aux2($mtsh(imagequery))
            inc %i
          }
          writeini mirc.ini background wquery $img.aux3($mtsh(imagequery))
          writeini mirc.ini background wchat $img.aux3($mtsh(imagequery))
        }
        hadd mts imagemirc $mtsget(%f,imagemirc)
        if ($img.aux4($mtsh(imagemirc))) background -m $+ $load.aux4($mtsh(imagemirc))
        if (!$dialog(toolbar)) {
          hadd mts imagebuttons $mtsget(%f,imagebuttons)
          if ($isfile($nofile($mtsh(file)) $+ $mtsh(imagebuttons))) background -u $img.aux2($mtsh(imagebuttons))
          hadd mts imagetoolbar $mtsget(%f,imagetoolbar)
          if ($img.aux4($mtsh(imagetoolbar))) background -l $+ $load.aux4($mtsh(imagetoolbar))
        }
        hadd mts imageswitchbar $mtsget(%f,imageswitchbar)
        if ($img.aux4($mtsh(imageswitchbar))) background -h $+ $load.aux4($mtsh(imageswitchbar))
        inc %j
      }
    }
    did -a preaux 2 6 0 7
    srst
    if ($mtsget(%f,script)) {
      did -ra preaux 1 Loading scriped events
      hadd mts script $remove($nofile($mtsh(file)) $+ $mtsget(%f,script),$mircdir)
      if ($isfile($mtsh(script))) .load -rs " $+ $mtsh(script) $+ "
    }

    hadd -m mts current $remove(%f,$mircdir)
    did -a preaux 2 7 0 7
    if ($mts.event(load)) {
      mtsvars echo $color(other) -s
      theme.text
    }
    if ($dialog(mts)) did -e mts 21
    dialog -x preaux
    if ($mtsret(main,minimize)) wins -r
    hsave -o mts $mtspath(mts.ah)
  }
}

alias mtsunload {
  if (!$hget(mts)) return
  if ($mtsret(main,minimize)) wins -n
  if ($mtsret(main,clear)) clearall
  current.unload
  dialog -hm preaux preaux
  did -a preaux 1 Unloading MTS Theme
  clinerst
  did -a preaux 2 1 0 8
  rgbrst
  did -a preaux 2 2 0 8
  colorrst
  did -a preaux 2 3 0 8
  bgrst
  did -a preaux 2 4 0 8
  fontrst
  did -a preaux 2 5 0 8
  tsrst
  did -a preaux 2 6 0 8
  srst
  did -a preaux 2 7 0 8
  hdel -w mts *
  if ($isfile($mtspath(current.mts))) .remove $mtspath(current.mts)
  did -a preaux 2 8 0 8
  if ($dialog(mts)) did -b mts 21
  dialog -x preaux
  if ($mtsret(main,minimize)) wins -r
  hsave -o mts $mtspath(mts.ah)
  hfree mts
}

alias mtsvars {
  set -nu %:echo $gettok($1-,1,9)
  set -nu %::me $me
  set -nu %::server $server
  set -nu %::port $port
  set -nu %::pre $pre
  set -nu %::target $target
  set -u %::c1 $bc(1)
  set -u %::c2 $bc(2)
  set -u %::c3 $bc(3)
  set -u %::c4 $bc(4)
  set -nu %::timestamp $time($mtsh(timestampformat))
  if ($numeric) {
    set -nu %::numeric $numeric
    var %t = $gettok($gettok($1-,2,9),1,32)
    set -nu %::value %t
    set -nu %::nick %t
    set -nu %::chan %t
    set -nu %::fromserver $nick
    set -nu %::isoper is not
    set -nu %::isregd is not
    set -nu %::text $gettok($1-,2,9)
  }
}

alias -l mtsplace {
  var %t = $readini(mirc.ini,events,default)
  if ($1 == join) %t = $gettok(%t,1,44)
  elseif ($1 == part) %t = $gettok(%t,2,44)
  elseif ($1 == quit) %t = $gettok(%t,3,44)
  elseif ($1 == mode) %t = $gettok(%t,4,44)
  elseif ($1 == topic) %t = $gettok(%t,5,44)
  elseif ($1 == ctcp) %t = $gettok(%t,6,44)
  elseif ($1 == nick) %t = $gettok(%t,7,44)
  elseif ($1 == kick) %t = $gettok(%t,8,44)
  return %t
}

alias -l theme.parse {
  var %t = $replace($1,<pre>,%::pre,<timestamp>,%::timestamp,<c1>,%::c1,<c2>,%::c2,<c3>,%::c3,<c4>,%::c4)
  var %t = $replace(%t,<me>,%::me,<server>,%::server,<port>,%::port,<nick>,%::nick,<chan>,%::chan,<address>,%::address)
  var %t = $replace(%t,<cmode>,%::cmode,<cnick>,%::cnick,<target>,%::target,<knick>,%::knick,<kaddress>,%::kaddress,<newnick>,%::newnick)
  var %t = $replace(%t,<modes>,%::modes,<ctcp>,%::ctcp,<numeric>,%::numeric,<value>,%::value,<fromserver>,%::fromserver,<users>,%::users)
  var %t = $replace(%t,<away>,%::away,<realname>,%::realname,<isoper>,%::isoper,<operline>,%::operline,<isregd>,%::isregd)
  var %t = $replace(%t,<wserver>,%::wserver,<serverinfo>,%::serverinfo,<idletime>,%::idletime,<signontime>,%::signontime,<iaddress>,%::iaddress,<naddress>,%::naddress,<raddress>,%::raddress)
  var %t = $replace(%t,<ts>,,<lt>,<,<gt>,>,<parentext>,%::parentext,<text>,%::text)
  return %t
}

alias -l theme.text {
  if (%::text) set -nu %::parentext $replace($mtsh(parentext),<text>,%::text)
  if ($1) var %t = $mtsget($mtsh(current),$1,1)
  else var %t = %mts.event
  if (!%t) && (raw. isin $1) var %t = $mtsget($mtsh(current),raw.other)
  if (!%t) return
  if ($gettok(%t,1,32) != !script) %:echo $theme.parse($eval(%t,2)) %:comments
  else {
    if (!$gettok(%t,2,32)) {
      if (raw. isin $1) halt
    }
    else {
      var %t = $gettok(%t,2-,32)
      var %i = 1
      while ($gettok(%t,%i,124)) {
        $eval($theme.parse($v1),2)
        inc %i
      }
    }
  }
  haltdef
}

alias cmode {
  var %t = $left($remove($nick($2,$1).pnick,$1),1)
  if (%t == .) && ($mtsh(clinecharowner)) var %t = $mtsh(clinecharowner)
  elseif (%t == @) && ($mtsh(clineCharop)) var %t = $mtsh(clineCharop)
  elseif (%t == %) && ($mtsh(clineCharhop)) var %t = $mtsh(clineCharhop)
  elseif (%t == +) && ($mtsh(clineCharvoice)) var %t = $mtsh(clineCharvoice)
  elseif ($mtsh(clineCharregular)) var %t = $mtsh(clineCharregular)
  return $+(,%t,)
}

alias -l mts.event {
  if (!$mtsh(current)) || (!$1) return
  set -nu %mts.event $mtsget($mtsh(current),$1,1)
  if (%mts.event) return 1
}

alias pre if ($mtsh(pre)) return $v1

alias bc if ($1 isnum) && ($mtsh(basecolors)) return  $+ $gettok($mtsh(basecolors),$1,44)

alias cmdchar return $readini(mirc.ini,text,commandchar)

alias -l img.aux return $lower($replace($left($gettok($1,1,32),1),s,r))

alias -l img.aux2 return " $+ $nofile($mtsh(file)) $+ $iif($gettok($1,2,32),$v1,$1) $+ "

alias -l img.aux3 {
  var %t = $gettok($1,1,32)
  if (%t == center) var %t = 0
  elseif (%t == fill) var %t = 1
  elseif (%t == normal) var %t = 2
  elseif (%t == stretch) var %t = 3
  elseif (%t == tile) var %t = 4
  elseif (%t == photo) var %t = 5
  return $nofile($mtsh(file)) $+ $gettok($1,2,32) $+ , $+ %t
}

alias -l img.aux4 return $isfile($nofile($mtsh(file)) $+ $gettok($1,2,32))

alias describe {
  if ($2 != $null) {
    if ($show) {
      if (!$window($1)) var %t = textmsgself
      elseif ($1 ischan) var %t = actionchanself
      else var %t = actionqueryself
      if ($mts.event(%t)) {
        mtsvars echo $color(action) $iif(%t == textmsgself,-ta,-tm $1)
        set -nu %::chan $1
        set -nu %::target $1
        set -nu %::text $2-
        if (%t == textmsgself) {
          set -nu %::address $address($1,5)
          set -nu %::nick $1
          set -nu %::me $me
        }
        else {
          if (%t == actionchanself) set -u %::cmode $cmode($me,$1)
          set -nu %::nick $me
          set -nu %::me $me
          set -nu %::address $address($me,5)
        }
        var %m = .describe
        theme.text
      }
      else var %m = describe
    }
    else var %m = .describe
    %m $1-
  }
}

alias action if ($is.input($1)) describe $active $1-

alias me if ($is.input($1)) describe $active $1-

alias msg {
  if ($2 != $null) {
    if ($show) {
      if (!$window($1)) var %t = textmsgself
      elseif ($1 ischan) var %t = textchanself
      else var %t = textqueryself
      if ($mts.event(%t)) {
        mtsvars echo $color(own) $iif(%t == textmsgself,-ta,-tm $1)
        set -nu %::chan $1
        set -nu %::target $1
        set -nu %::text $2-
        if (%t == textmsgself) {
          set -nu %::address $address($1,5)
          set -u %::cnick $ncolor($1)
          set -nu %::nick $+(,%::cnick,$1,)
          set -nu %::me $me
        }
        else {
          if (%t == textchanself) {
            set -u %::cnick $ncolor($me,$1)
            set -u %::cmode $cmode($me,$1)
          }
          else set -u %::cnick $ncolor($me)
          set -nu %::nick $+(,%::cnick,$me,)
          set -nu %::me $+(,%::cnick,$me,)
          set -nu %::address $address($me,5)
        }
        var %m = .msg
        theme.text
      }
      else var %m = msg
    }
    else var %m = .msg
    %m $1-
  }
}

alias amsg {
  if ($1 != $null) {
    am.aux amsg textchanself $1-
    %m $1-
  }
}

alias ame {
  if ($1 != $null) {
    am.aux ame actionchanself $1-
    %m $1-
  }
}

alias qmsg {
  if ($1 != $null) {
    qm.aux qmsg textqueryself $1-
    %m $1-
  }
}

alias qme {
  if ($1 != $null) {
    qm.aux qme actionqueryself $1-
    %m $1-
  }
}

alias say if ($is.input($1)) msg $active $1-

alias notice {
  if ($2 != $null) {
    if ($show) {
      if ($mts.event($iif($left($1,1) == $chr(35),noticechanself,noticeself))) {
        mtsvars echo $color(own) -ta
        set -nu %::me $me
        set -nu %::target $1
        set -nu %::address $address($me,5)
        if ($1 ischan) set -u %::cmode $cmode($me,$1)
        set -u %::cnick $ncolor($1)
        set -nu %::chan $+(,%::cnick,$1,)
        set -nu %::nick $+(,%::cnick,$1,)
        set -nu %::text $2-
        var %m = .notice
        theme.text
      }
      else var %m = notice
    }
    else var %m = .notice
    %m $1-
  }
}

alias dns {
  if ($mts.event(dns)) {
    if ($left($1,1) == -) var %t = $2
    else var %t = $1
    mtsvars echo $color(other) -a
    set -u %::nick %t
    set -u %::address %t
    .dns $1-
    if ($show) theme.text
  }
  else $iif($show,dns,.dns) $1-
}

alias ctcp {
  if ($2 != $null) {
    ctcp.aux ctcp $1-
    %m $iif($2 == PING,$1 $2 $ctime,$1-)
  }
}

alias ctcpreply {
  if ($2 != $null) {
    ctcp.aux ctcpreply $1-
    %m $1-
  }
}

alias mts.namergb {
  var %t = $iif($read($mtspath(namecolors.tl),ns,$1),$v1,$1)
  var %d = 255,255,255
  return $iif($gettok(%t,0,44) == 3,%t,%d)
}

alias -l mts.as return $iif($cid == $activecid,a,s)

alias -l mts.onnotify {
  if ($1 == window) {
    var %n = 2
    var %t = 16
  }
  elseif ($1 == active) {
    var %n = 3
    var %t = 24
  }
  return $gettok($readini(mirc.ini,options,n $+ %n),%t,44)
}

alias -l mts.onactive {
  if ($1 == invites) {
    var %n = 3
    var %t = 26
  }
  elseif ($1 == queries) {
    var %n = 4
    var %t = 5
  }
  elseif ($1 == notices) {
    var %n = 5
    var %t = 13
  }
  elseif ($1 == whois) {
    var %n = 2
    var %t = 26
  }
  elseif ($1 == ctcps) {
    var %n = 4
    var %t = 19
  }
  elseif ($1 == away) {
    var %n = 4
    var %t = 32
  }
  return $gettok($readini(mirc.ini,options,n $+ %n),%t,44)
}

alias -l mtspop {
  mtspopups New mtspop 9 9
  mtspop.aux Add $cr mtsadd
  mtspop.aux Edit $cr mtsedit
  mtspop.aux Remove $cr mtsdel
  mtspop.aux 
  mtspop.aux Preview $cr mtspre $mpre(small)
  mtspop.aux Load $cr mtsload $sch $read($mtspath(mts.tl),n,$calc($did(mts,1).sel - 1))
  mtspop.aux 
  mtspop.aux Show info $cr mtsinfo $+(",$read($mtspath(mts.tl),n,$calc($did(mts,1).sel - 1)),")
  var %t = $mtspopups(Popup,mtspop + $mouse.dx $mouse.dy)
  if ($gettok(%t,1,32) == OK) $gettok(%t,4-,32)
}

alias -l mtspop.aux mtspopups AddItem mtspop end + 0 0 $1-

alias -l setmdxpath {
  var %t = $$sdir($scriptdir,Set MDX path,Ok)
  if ($isfile(%t $+ mdx.dll)) && ($isfile(%t $+ ctl_gen.mdx)) && ($isfile(%t $+ views.mdx)) writeini $mtspath(mts.ini) main mdx %t
  else var %null = $input(MDX files are missing. You need at least mdx.dll $+ $chr(44) ctl_gen.mdx and views.mdx,o,Theme loader)
}

alias setpoppath {
  var %t = $$sfile($scriptdir $+ *.dll,Set Popups.dll path,Ok)
  if ($isfile(%t)) writeini $mtspath(mts.ini) main popups %t
}

alias -l mtspath return $+(",$scriptdir,$1,")

alias -l mtsh return $hget(mts,$1)

alias -l mtsret return $readini($mtspath(mts.ini),$1,$2)

alias -l mtsinil if ($mtsret(main,$1)) did -c mts $2

alias -l mpre return $1 $sch $+(",$read($mtspath(mts.tl),n,$calc($did(mts,1).sel - 1)),")

alias -l mtsini {
  if ($did(mts,$2).state) did -u mts $2
  else did -c mts $2
  writeini $mtspath(mts.ini) main $1 $did(mts,$2).state
}

alias -l dm {
  if ($1) {
    if ($dialog(mtsinfo)) mtsinfo $+(",$read($mtspath(mts.tl),n,$1),")
    did -ra mts 4 Default
    var %i = 1
    var %t = scheme $+ 1
    while ($mtsget($1,%t)) {
      did -a mts 4 $mtsget($1,%t)
      inc %i
      var %t = scheme $+ %i
    }
    did -c mts 4 1
    if (%i > 1) did -e mts 4
    else did -b mts 4
  }
}

alias -l sch return $iif($did(mts,4).sel == 1,mts,$+(scheme,$calc($did(mts,4).sel - 1)))

alias -l clearinfo {
  if ($dialog(mtsinfo)) {
    did -ra mtsinfo 2 Info on theme: N/A
    did -ra mtsinfo 4 Name: N/A
    did -ra mtsinfo 5 Author: N/A
    did -ra mtsinfo 6 N/A
    did -ra mtsinfo 8 N/A
    did -ra mtsinfo 9 MTS Version: N/A
    did -ra mtsinfo 11 N/A
  }
}

alias -l mtsinfo.aux return $iif($mtsget($1,$2),$v1,N/A)

alias -l showpre {
  writeini $mtspath(mts.ini) main preview $1-
  did -ra mts 12 Preview: $deltok($nopath($1-),-1,45)
  did -h mts 22
  did -g mts 14 $1-
}

alias -l showprel {
  if ($dialog(lpre)) dialog -x lpre lpre
  dialog -hm lpre lpre
  did -g lpre 4 $1-
  did -ra lpre 2 Preview: $deltok($nopath($1-),-1,45)
}

alias -l mtssch {
  window -h @mtsp1
  .loadbuf -tmts @mtsp1 $shortfn($2-)
  if ($1 != mts) && ($read($2-,wn,$+($chr(91),$1,$chr(93)))) {
    window -h @mtsp2
    .loadbuf -t $+ $1 @mtsp2 $shortfn($2-)
    var %i = 1
    while ($line(@mtsp2,%i)) {
      var %w = $gettok($line(@mtsp2,%i),1,32) *
      if (%w != *) {
        if ($fline(@mtsp1,%w)) rline @mtsp1 $fline(@mtsp1,%w) $line(@mtsp2,%i)
        else aline @mtsp1 $line(@mtsp2,%i)
      }
      inc %i
    }
  }
}

alias -l mtspre.aux return $replace($1,<c1>,%::c1,<c2>,%::c2,<c3>,%::c3,<c4>,%::c4)

alias -l mtspre.aux2 {
  var %t = $theme.parse($iif($mtsget($3,$2),$v1,$4-))
  set -u %:echo aline @pretext $1
  if ($gettok(%t,1,32) == !script) {
    if ($gettok(%t,2-,32)) $v1
  }
  else aline @pretext $1 %t
}

alias -l optaux if ($mtsret(options,$1)) did -c mtsopt $2

alias -l optaux2 { 
  did -a mtsopt 22 $1
  hadd -m mtsopt $1 $mtsret(options,$1)
}

alias -l optaux3 mtsmdx SetColor $dname 23 background $color($hget(mtsopt,$1))

alias -l optaux4 writeini $mtspath(mts.ini) options $1 $did(mtsopt,$2).state

alias -l optaux5 writeini $mtspath(mts.ini) options $1 $hget(mtsopt,$1)

alias -l current.unload {
  if ($mts.event(unload)) {
    mtsvars echo $color(other) -s
    theme.text
  }
}

alias -l load.aux {
  if ($gettok($mtsh(colors),$1,44) != $null) color $2- $v1
  elseif ($1 == 28) color inactive $color(editbox)
}

alias -l load.aux2 return $replace($1,<c1>,$bc(1),<c2>,$bc(2),<c3>,$bc(3),<c4>,$bc(4),<pre>,$pre,<ts>,,<lt>,<,<gt>,>)

alias -l load.aux3 return " $+ $gettok($gettok($1,1,44),1,59) $+ " $gettok($1,2,44)

alias -l load.aux4 return $img.aux($1) $img.aux2($1)

alias -l load.aux5 return $mtsret(options,$1)

alias -l load.aux6 if ($mtsget($3-,$1) != $null) .cnick -m0 * $v1 $2

alias -l load.aux7 .cnick - $+ $1 $iif($2 == yourself,$!me,*) $mtsret(options,$2) $3

alias -l loadc1 {
  var %i = 1
  while ($gettok($1-,%i,32)) {
    var %t = %t $+ , $+ $rgb( [ $mts.namergb($v1) ] )
    inc %i
  }
  writeini mirc.ini palettes n0 $remfirst(%t,1)
}

alias -l loadc2 {
  var %t = $1-
  if ($numtok(%t,44) == 26) var %t = %t $+ , $+ $gettok(%t,-1,44)
  if ($numtok(%t,44) == 27) var %t = %t $+ , $+ $gettok(%t,22,44)
  writeini mirc.ini colors n0 mIRC Classic, $+ %t
  .color -ls mIRC Classic
}

alias -l rgbrst {
  if ($mtsh(rgbcolors)) {
    loadc1 $rgbdef
    hdel mts rgbcolors
  }
}

alias -l colorrst {
  if ($mtsh(colors)) {
    loadc2 $cdef
    hdel mts colors
  }
}

alias -l clinerst while ($cnick(0)) .cnick -r 1

alias -l tsrst {
  .timestamp on
  .timestamp -f [HH:nn]
  hdel -w mts timestamp*
}

alias -l bgrst {
  var %j = 1
  while ($scon(%j)) {
    scon %j
    background -xs
    background -xm
    background -xl
    background -xu
    background -xh
    var %i = 1
    while ($chan(%i)) {
      background -x $chan(%i)
      inc %i
    }
    var %i = 1
    while ($query(%i)) {
      background -x $query(%i)
      inc %i
    }
    var %i = 1
    while ($chat(%i)) {
      background -x $+(=,$chat(%i))
      inc %i
    }
    inc %j
  }
  remini mirc.ini background
  writeini mirc.ini background wquery none
  writeini mirc.ini background wchat none
  writeini mirc.ini background wchannel none
  hdel -w mts image*
}

alias -l srst {
  if ($mtsh(script)) && ($isfile($v1)) .unload -rsn " $+ $mtsh(script) $+ "
  hdel mts script
}

alias -l fontrst {
  font -z
  hdel -w mts font*
}

alias -l cdef return 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0

alias -l rgbdef return 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

alias -l ncolor {
  var %t = $cnick($iif($2,$nick($2,$1).pnick,$1))
  if (%t) && ($cnick(%t).method != 2) return $cnick(%t).color
}

alias -l wins {
  var %j = 1
  while ($scon(%j)) {
    scon %j
    if ($left($1,1) == $chr(45)) {
      var %i = 1
      while ($window(*,%i)) {
        var %t = $window(*,%i)
        window $1 $iif($left(%t,1) == $chr(61),%t,$+(",%t,"))
        inc %i
      }
    }
    inc %j
  }
}

alias -l loopt {
  var %t = $mtsplace($event)
  if ($event == quit) {
    if (%t == 1) || (%t == 2) var %s = 1
    if (%t == 0) || (%t == 2) var %c = 1
  }
  else {
    if (%t == 0) var %c = 1
  }
  if (!%c) && (!%s) halt 
  if (%c) {
    var %i = 1
    while ($comchan($1,%i)) {
      mtsvars echo $color($event) -t $comchan($1,%i)
      theme.text
      inc %i
    }
  }
  if (%s) {
    mtsvars echo $color($event) -ts
    theme.text
  }
}

alias -l tjp {
  if ($mts.event($1)) {
    if ($event == join) && ($nick == $me) {
      if ($mtsret(options,names)) hadd -m join $+(names.,$chan,$cid) 1
      if ($mtsret(options,chaninfo)) hadd -m join $+(topic.,$chan,$cid) 1
    }
    var %t = $mtsplace($event)
    if (%t == 2) halt 
    elseif (%t == 1) var %t = echo $color($event) -ts
    else var %t = echo $color($event) -t $chan
    mtsvars %t
    set -nu %::nick $nick
    set -nu %::address $iif($address,$v1,N/A)
    set -nu %::chan $chan
    set -nu %::text $2-
    theme.text
  }
}

alias -l mts.inp {
  if ($mtsh(current)) && ($left($1,1) != $cmdchar) {
    say $1-
    halt
  }
}

alias -l mts.tan {
  if ($mtsh(current)) {
    var %t = - $+ $iif($highlight($1-),l)
    if ($chan) {
      %t = %t $+ tm $chan    
      if ($event == text) var %e = textchan
      elseif ($event == action) var %e = actionchan
      else var %e = noticechan
      set -nu %::chan $chan
      set -u %::cmode $cmode($nick,$chan)
      if ($event == text) set -u %::cnick $ncolor($nick,$chan)
    }
    else {
      %t = %t $+ $iif($event != notice,$iif($query($nick),tm $nick,$iif($gettok($readini(mirc.ini,options,n0),22,44),tdm,$iif($mts.onactive(queries) && $active ischan,$mts.as $+ tm,stm))),$iif($mts.onactive(notices),$mts.as $+ tm,stm))
      if ($event == text) var %e = $iif($query($nick),textquery,textmsg)
      elseif ($event == action) var %e = actionquery
      else var %e = notice
      if ($event == text) set -u %::cnick $ncolor($nick)
    }
    if ($mts.event(%e)) {
      if ($chan) && ($gettok($readini(mirc.ini,options,n0),3,44)) && (($chan != $active) || (!$appactive)) beep 1
      elseif ($gettok($readini(mirc.ini,options,n4),2,44)) && (($nick != $active) || (!$appactive)) beep 1
      if ($gettok($readini(mirc.ini,options,n7),$iif($chan,5,6),44)) flash [message waiting]
      if ($highlight($nick).nicks) && ($highlight) {
        if ($highlight($nick).sound != none) {
          var %s = $v1
          $iif(%s == beep,%s,$iif($isfile(%s),.splay -wmp $+(",%s,")))
        }
        if ($highlight($nick).color) var %c = $v1 - 1
        if ($highlight($nick).flash) flash $+(-r,$v1) $highlight($nick).message
      }
      set -nu %::nick $+(,%::cnick,$nick,)
      set -nu %::address $iif($address,$v1,N/A)
      set -nu %::text $1-
      mtsvars echo $iif(%c != $null,%c,$color($iif($event == text,normal,$event))) %t
      theme.text
    }
  }
}

alias -l uno {
  if ($mts.event($event)) && (!$mts.onnotify(window)) {
    set -nu %::nick $nick
    set -nu %::address $notify($nick).addr
    set -nu %::text $notify($nick).note
    mtsvars echo $color(notify) -st
    theme.text
    var %t = Status Window
    if ($mts.onnotify(active)) && ($cid == $activecid) && ($active != %t) {
      mtsvars echo $color(notify) -at
      theme.text
    }
    if ($notify($nick).whois) && ($event == notify) whois $nick
  }
}

alias -l am.aux {
  if ($show) {
    if ($mts.event($2)) {
      set -nu %::address $address($me,5)
      set -nu %::text $3-
      set -u %m . $+ $1
      var %i = 1
      while ($chan(%i)) {
        var %t = $v1
        mtsvars echo $color(own) -t %t
        set -u %::cmode $cmode($me,%t)
        if ($1 == amsg) set -u %::cnick $ncolor($me,%t)
        set -nu %::chan %t
        set -nu %::target %::chan
        set -nu %::me $+(,%::cnick,$me,)
        set -nu %::nick %::me
        theme.text $2
        inc %i
      }
    }
    else set -u %m $1
  }
  else set -u %m . $+ $1
}


alias -l qm.aux {
  if ($show) {
    if ($mts.event($2)) {
      set -nu %::address $address($me,5)
      if ($1 == qmsg) set -u %::cnick $ncolor($me)
      set -nu %::text $3-
      set -u %m . $+ $1
      var %i = 1
      while ($query(%i)) {
        var %t = $v1
        mtsvars echo $color(own) -t %t
        set -nu %::target %t
        set -nu %::me $+(,%::cnick,$me,)
        set -nu %::nick %::me
        theme.text $2
        inc %i
      }
    }
    else set -u %m $1
  }
  else set -u %m . $+ $1
}

alias is.input {
  if ($1 != $null) && (($active ischan) || ($query($active)) || ($left($active,1) == $chr(61))) return 1
}

alias -l ctcp.aux {
  if ($show) {
    if ($mts.event($+($1,$iif($left($1,1) == $chr(35),chanself,self)))) {
      mtsvars echo $color(own) -at
      set -nu %::nick $2
      set -nu %::chan $2
      set -nu %::target $2
      set -nu %::ctcp $upper($3)
      set -nu %::text $4-
      set -nu %m . $+ $1
      theme.text
    }
    else set -nu %m $1
  }
  else set -nu %m . $+ $1
}

alias -l raw.aux {
  if ($halted) return
  if ($mtsret(options,welcome)) && ($numeric >= 001) && ($numeric <= 005) halt
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) $1 $+ $chr(9) $+ $2-
    theme.text $+(raw.,$numeric)
    halt
  }
}

alias -l raw.aux2 {
  if ($halted) return
  if ($hget(lusers,$cid)) {
    if ($numeric == 266) hdel lusers $cid
    halt
  }
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $3-
    set -u %::users $gettok($3-,$1,32)
    set -u %::value $gettok($3-,$2,32)
    theme.text $+(raw.,$numeric)
    halt
  }
}

alias -l raw.aux3 {
  if ($halted) return
  var %t = $iif($hget($+(whois.,$2,$cid),311),whois,whowas)
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),$+(raw.,$numeric))) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::text $3-
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

alias -l raw.aux4 {
  if ($halted) return
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(raw.other)) {
    mtsvars echo $color(other) -s $+ $chr(9) $+ $2-
    set -u %::nick $2
    set -u %::chan $3
    theme.text $+(raw.,$numeric)
    halt
  }
}

alias -l raw.aux5 {
  if ($halted) return
  var %t = $iif($numeric == 311,whois,whowas)
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    hadd -m $+(whois.,$2,$cid) $numeric $3-
    if ($mtsget($mtsh(current),raw. $+ $numeric)) {
      mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
      set -u %::nick $2
      set -u %::address $3 $+ @ $+ $4
      set -u %::realname $6-
      set -u %::country $country($4)
      theme.text $+(raw.,$numeric)
    }
    halt
  }
}

alias -l raw.aux6 {
  if ($hget(motd,$cid)) halt
  raw.aux -s $2-
}

alias -l aux.318.369 {
  if ($halted) return
  var %t = $iif($numeric == 318,whois,whowas)
  if ($mts.event(raw. $+ $numeric)) || ($mts.event(%t)) || ($mts.event(raw.other)) {
    mtsvars echo $color(whois) - $+ $iif($mts.onactive(whois),$mts.as,s) $+ $chr(9) $+ $2-
    if ($mtsget($mtsh(current),whois)) {
      var %i = 1
      while ($gettok($2,%i,44)) {
        set -u %::nick $gettok($2,%i,44)
        var %t = $hget($+(whois.,%::nick,$cid),$iif($numeric == 318,311,314))
        if (%t) {
          set -u %::address $gettok(%t,1,32) $+ @ $+ $gettok(%t,2,32)
          set -u %::realname $gettok(%t,4-,32)
          set -u %::country $country($gettok(%t,2,32))
          set -u %::away $hget($+(whois.,%::nick,$cid),301)
          set -u %::text $hget($+(whois.,%::nick,$cid),301)
          set -u %::isregd is $iif(!$hget($+(whois.,%::nick,$cid),307),not)
          var %t = $hget($+(whois.,%::nick,$cid),317)
          set -u %::idletime $gettok(%t,1,32)
          set -u %::signontime $asctime($gettok(%t,2,32))
          set -u %::chan $hget($+(whois.,%::nick,$cid),319)
          var %t = $hget($+(whois.,%::nick,$cid),312)
          set -u %::wserver $gettok(%t,1,32)
          set -u %::serverinfo $gettok(%t,2-,32)
          var %t = $hget($+(whois.,%::nick,$cid),313)
          set -u %::isoper is $iif(!%t,not)
          set -u %::operline %t
          theme.text $iif($numeric == 318,whois,whowas)
        }
        inc %i
      }
    }
    if $hget($+(whois.,$gettok($2,1,44),$cid),$iif($numeric == 318,311,314)) && ($mtsget($mtsh(current),$+(raw.,$numeric))) {
      set -u %::nick $2
      theme.text $+(raw.,$numeric)
    }
    hfree -w $+(whois.*,$cid)
    halt
  }
}
