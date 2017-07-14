alias Garbage.load {
  if (%Garbage.infobox !isnum) %Garbage.infobox = 1
  if (%Garbage.showsync !isnum) %Garbage.showsync = 1
  if (%Garbage.hidenames !isnum) %Garbage.hidenames = 1
  if (%Garbage.showcommon !isnum) %Garbage.showcommon = 1
  if (%Garbage.showclones !isnum) %Garbage.showclones = 1
  if (%Garbage.showonline !isnum) %Garbage.showonline = 1
  if (%Garbage.hidewhowas !isnum) %Garbage.hidewhowas = 1
  if (%Garbage.hidewhowas.first !isnum) %Garbage.hidewhowas.first = 3
  if (%Garbage.alignment !isnum) %Garbage.alignment = 3
  if (%Garbage.alignment.manual !isnum) %Garbage.alignment.manual = 0
  if (%Garbage.alignment.size !isnum) %Garbage.alignment.size = 10
  if (%Garbage.alignment.size.max !isnum) %Garbage.alignment.size.max = 15
  if (%Garbage.alignment.manual.size !isnum) %Garbage.alignment.manual.size = 50
  if %Garbage.infobox {
    %:echo $Garbage.box(61,1,Garbage Theme...,1,04/garbage,1,1,1)
    _dummy_ $Garbage.boxtext(ÿÿÿ14Author:,Allied,61)
    _dummy_ $Garbage.boxtext(ÿÿÿÿ14Email:,allied@mynet.com,61)
    _dummy_ $Garbage.boxtext(ÿÿÿÿÿÿ14Web:,http://www.mynet.com $+ $chr(32),61)
    _dummy_ $Garbage.boxtext(ÿÿÿÿÿ14Info:,$theme.setting(Description),61)
    %:echo $Garbage.box(61,1,$null,1,...doesn't smell so bad,1,1)
  }
  else %:echo %::pre Garbage is ready to smell up
}
alias Garbage.RAW001 {
  %:echo $Garbage.box(61,1,/server 04 $+ %::server,1,$null,1,0,1)
  if (*!*@* iswm $gettok(%::text,7,32)) _dummy_ $Garbage.boxtext(ÿÿ14Address:,$gettok(%::text,7,32))
}
alias Garbage.RAW005 {
  if ($len(%::text)) _dummy_ $Garbage.boxtext(14Protocols:,%::text)
  %:echo $Garbage.box(61,1,$network,1,on port 04 $+ $port,1)
}
alias Garbage.RAW251 {
  %:::lusers.ticks = $ticks
  %:::lusers.total = %::users + %::text
  %:echo $Garbage.box(61,1,/lusers 04 $+ %::server,1,$uptime(server,1),1,1,1)
  _dummy_ $Garbage.boxtext(ÿÿ14Visible:,$Garbage.align($+(04,%::users,),6,1) $Garbage.align($+($Garbage.round($calc(%::users /%:::lusers.total *100),5),$chr(37)),39,1),-1)
  _dummy_ $Garbage.boxtext(ÿÿÿ14Hidden:,$Garbage.align($+(04,%::text,),6,1) $Garbage.align($+($Garbage.round($calc(%::text /%:::lusers.total *100),5),$chr(37)),39,1),-1)
  _dummy_ $Garbage.boxtext(ÿÿ14Servers:,$Garbage.align($+(04,%::value,),6,1) $Garbage.align($Garbage.round($calc(%:::lusers.total /%::value),6),39,1),-1)
}
alias Garbage.RAW266 {
  var %c %:echo ÿ,%t
  _dummy_ $Garbage.boxtext(ÿÿÿ14Global:,$+($Garbage.align($+(04,%::users,),6,1),/,$Garbage.align($+(04,%::value,),6) $Garbage.align($Garbage.round($calc(%::users /%::value *100),5) $+ $chr(37),32,1)),-1)
  %:echo $Garbage.boxsync(61,%:::lusers.ticks,End of /lusers,1)
  unset %:::lusers.*
}
alias Garbage.RAW256 {
  %:::admin.ticks = $ticks
  %:echo $Garbage.box(61,1,/admin 04 $+ %::server,1,$network,1,1,1)
}
alias Garbage.RAW259 {
  _dummy_ $Garbage.boxtext(ÿÿÿÿ14Email:,%::text,61)
  %:echo $Garbage.boxsync(61,%:::admin.ticks,End of /admin,1)
  unset %:::admin.*
}
alias Garbage.RAW271 {
  if !%:::silence.num {
    %:::silence.ticks = $ticks
    %:echo $Garbage.box(61,1,/silence,1,$null,1,1,1)
  }
  inc %:::silence.num
  _dummy_ $Garbage.boxtext($null,%::text,61)
}
alias Garbage.RAW272 {
  if (!%:::silence.num) %:::silence.num = 0
  %:echo $Garbage.boxsync(61,%:::silence.ticks,End of /silence $+(14[15,%:::silence.num,14]),%:::silence.num)
  unset %:::silence.*
}
alias Garbage.RAW352 {
  if !%:::who.num {
    %:::who.ticks = $ticks
    %:echo $Garbage.box(61,1,/who,1,$null,1,0,1)
  }
  inc %:::who.num
  var %f $gettok(%::text,7,32)
  _dummy_ $Garbage.boxtext($null,$+($iif(%::isoper == is,04),%::nick 14[,%::address,14] %::wserver,14[,%::value,14] $iif(%::chan,$+([,$remove(%f,*,%,H,G),%::chan,14])) $iif(G isin %f,14Gone) [05,%::realname,14]))
}
alias Garbage.RAW315 {
  if (!%:::who.num) %:::who.num = 0
  %:echo $Garbage.boxsync(61,%:::who.ticks,$+(/who 04,%::value 14[15,%:::who.num,14]))
  unset %:::who.*
}
alias Garbage.RAW375 {
  %:::motd.ticks = $ticks
  %:echo $Garbage.box(61,1,/motd 04 $+ %::server,1,$network,1,0,1)
}
alias Garbage.RAW376 {
  %:echo $Garbage.boxsync(61,%:::motd.ticks,End of /motd)
  unset %:::motd.*
}

alias Garbage.RAW331 {
  if (%:::joinself.ticks. [ $+ [ %::chan ] ] == $null) %:echo %::pre ÿ14Topic: %::text
  else _dummy_ $Garbage.boxtext(ÿÿÿÿ14Topic:,%::text,61)
}
alias Garbage.RAW332 {
  if (%:::joinself.ticks. [ $+ [ %::chan ] ] == $null) %:::topic.ticks = $ticks
  else %:::topic.in = 1
  %:echo $Garbage.box(61,1,/topic $+(04,%::chan,$chr(32)),1,$null,1,1,1)
  _dummy_ $Garbage.boxtext(ÿÿÿÿ14Topic:,%::text,61)
}
alias Garbage.RAW333 {
  _dummy_ $Garbage.boxtext(ÿÿÿÿ14SetBy:,%::nick at %::text,61)
  if %:::joinself.ticks. [ $+ [ %::chan ] ] == $null {
    %:echo $Garbage.boxsync(61,%:::topic.ticks,End of /topic $+(04,%::chan,$chr(32)),1)
    unset %:::topic.*
  }
}
alias Garbage.RAW353 {
  if !%:::names.num {
    if (%:::joinself.ticks. [ $+ [ %::chan ] ] == $null) %:::names.ticks = $ticks
    elseif (%Garbage.hidenames) return
    %:echo $Garbage.box(61,1,/names $+(04,%::chan,$chr(32)),1,$iif($me ison %::chan,$chan(%::chan).mode,remote request),1,1,$calc(1 +%:::topic.in))
  }
  inc %:::names.num $numtok(%::text,32)
  inc %:::names.@ $count(%::text,@)
  inc %:::names.+ $count(%::text,+)
  if ($len(%::text)) _dummy_ $Garbage.boxtext($null,%::text $+ $chr(32),61)
}
alias Garbage.RAW366 {
  var %j %:::joinself.ticks. [ $+ [ %::chan ] ]
  if (!%:::names.@) %:::names.@ = 0
  if (!%:::names.+) %:::names.+ = 0
  %:echo $Garbage.box(61,2,$iif(%j,/mode $+(04,%::chan,$chr(32)),$iif(%Garbage.showsync && %:::names.ticks,$calc(($ticks -%:::names.ticks) /1000))),1,$iif(%:::names.num,$+(04,%:::names.@,14/05,%:::names.+,14/15,%:::names.num),/names 04 $+ %::chan 14ended),1,1,$iif(%j,$calc(2 -%Garbage.hidenames)))
  unset %:::names.* %:::topic.in
}
alias Garbage.RAW324 {
  if %:::joinself.ticks. [ $+ [ %::chan ] ] == $null {
    %:::mode.ticks = $ticks
    %:echo $Garbage.box(61,2,/mode $+(04,%::chan,$chr(32)),1,$null,1,1,1)
  }
  _dummy_ $Garbage.boxtext(ÿÿÿÿ14Modes:,%::modes,61)
}
alias Garbage.RAW329 {
  var %j %:::joinself.ticks. [ $+ [ %::chan ] ]
  _dummy_ $Garbage.boxtext(ÿ14Creation:,%::text,61)
  %:echo $Garbage.boxsync(61,$iif(%j,%j,%:::mode.ticks),$iif(%j,Joined $+(04,%::chan 14[15,$chan(0),14]),End of /mode $+(04,%::chan,$chr(32))),1)
  if (%j) unset %:::joinself.ticks. [ $+ [ %::chan ] ]
  else unset %:::mode.ticks
}

alias Garbage.RAW367 {
  if !%:::banlist.num {
    %:::banlist.ticks = $ticks
    %:echo $Garbage.box(61,1,/mode 04 $+ %::chan 14+b,1,$null,1,0,1)
  }
  inc %:::banlist.num
  tokenize 32 %::text
  _dummy_ $Garbage.boxtext($null,$2 $+(15,$3,) $asctime($4))
}
alias Garbage.RAW368 {
  if (!%:::banlist.num) %:::banlist.num = 0
  %:echo $Garbage.boxsync(61,%:::banlist.ticks,End of banlist $+(04,%::chan 14[15,%:::banlist.num,14]))
  unset %:::banlist.*
}
alias Garbage.RAW371 {
  if !%:::info.in {
    %:::info.in = 1
    %:::info.ticks = $ticks
    %:echo $Garbage.box(61,1,/info 04 $+ %::server,1,$network,1,1,1)
  }
  _dummy_ $Garbage.boxtext($null,%::text,61)
}
alias Garbage.RAW374 {
  %:echo $Garbage.boxsync(61,%:::info.ticks,End of /info 04 $+ %::server,1)
  unset %:::info.*
}

alias Garbage.RAW301 {
  if (%:::whois.num) _dummy_ $Garbage.boxtext(ÿÿÿÿÿ15Away:,%::away,61)
  else %:echo %::pre 15Away: %::away
}
alias Garbage.RAW311 {
  if ($1 == /whowas) %:::whois.whowas = 1
  if %:::whois.num {
    if ($1 == /whowas) && (%Garbage.hidewhowas) && (%Garbage.hidewhowas.first <= %:::whois.num) return
    %:echo $Garbage.boxsync(61,%:::whois.ticks,$+([15,%:::whois.num,14]),1)
  }
  inc %:::whois.num
  %:::whois.ticks = $ticks
  %:echo $Garbage.box(61,1,$1 04 $+ %::nick,1,$iif(%Garbage.showcommon && $1 == /whois,$+([15,$comchan(%::nick,0),14])),1,1,1)
  _dummy_ $Garbage.boxtext(ÿÿ14Address:,%::address,61)
  _dummy_ $Garbage.boxtext(ÿÿÿÿÿ14Name:,%::realname,61)
  if %Garbage.showclones {
    var %i 1,%m *! $+ %::address,%c
    while $ial(%m,%i).nick {
      if ($ifmatch != %::nick) %c = $addtok(%c,$ifmatch,32)
      inc %i
    }
    if (%c) _dummy_ $Garbage.boxtext(ÿÿÿ14Clones:,%c $+(14[15,$numtok(%c,32),14]),61)
  }
}
alias Garbage.RAW312 {
  if (%:::whois.whowas) && (%Garbage.hidewhowas) && (%Garbage.hidewhowas.first <= %:::whois.num) return
  _dummy_ $Garbage.boxtext(ÿÿÿ14Server:,%::wserver $iif(%::serverinfo,$+(14[,$ifmatch,14])),61)
}
alias Garbage.RAW317 {
  _dummy_ $Garbage.boxtext(ÿÿÿÿÿ14Idle:,$duration(%::idletime),61)
  if %::signontime {
    var %c $ctime(%::signontime)
    _dummy_ $Garbage.boxtext(ÿÿÿÿ14Login:,$asctime(%c,HH:nn:ss dd/mm/yy) $iif(%Garbage.showonline,$+(14[15,$duration($calc($ctime -%c)),14])),61)
  }
}
alias Garbage.RAW318 {
  if %:::whois.num {
    %:echo $Garbage.boxsync(61,%:::whois.ticks,$+(End of $1 [15,%:::whois.num,14]),1)
    unset %:::whois.*
  }
}
alias Garbage.RAW319 {
  var %i 1,%m,%r
  while $gettok(%::chan,%i,32) {
    var %p
    %m = $ifmatch
    while $left(%m,1) isin .@%+-*^ {
      %p = %p $+ $ifmatch
      %m = $right(%m,-1)
    }
    %r = %r $Garbage.color(%m,%p,$iif($me ison %m,15,14),1)
    inc %i
  }
  _dummy_ $Garbage.boxtext(ÿ14Channels:,%r $+(14[15,$calc(%i -1),14]),61)
}
alias Garbage.RAWOther {
  if (%:::whois.num) _dummy_ $Garbage.boxtext(ÿÿÿÿ14Extra:,%::text,61)
  elseif ($len(%::text)) %:echo %::pre %::text
}

alias Garbage.Join {
  if (%Garbage.alignment == 3) Garbage.alignnum.refresh %::chan %::nick
  %:echo %::pre ÿÿ14Join: $Garbage.nick(1) %:comments
}
alias Garbage.Part {
  if (%Garbage.alignment == 3) Garbage.alignnum.refresh %::chan %::nick 1
  %:echo %::pre ÿÿ14Part: $Garbage.nick(1) %::parentext %:comments
}
alias Garbage.Kick {
  if (%Garbage.alignment == 3) Garbage.alignnum.refresh %::chan %::knick 1
  %:echo %::pre ÿÿ14Kick: $+(15,%::knick,) $iif(%::kaddress,$+(14[,$ifmatch,14])) 14by $Garbage.nick %::parentext %:comments
}
alias Garbage.Quit {
  if %Garbage.alignment == 3 {
    var %i 1
    while $comchan(%::nick,%i) {
      Garbage.alignnum.refresh $ifmatch %::nick 1
      inc %i
    }
  }
  %:echo %::pre ÿÿ14Quit: $Garbage.nick(1) %::parentext %:comments
}
alias Garbage.NickChange {
  if %Garbage.alignment == 3 {
    var %i 1
    while $comchan(%::newnick,%i) {
      Garbage.alignnum.refresh $ifmatch %::newnick
      inc %i
    }
  }
  %:echo %::pre ÿÿ14Nick: $Garbage.nick(1) to $+(15,%::newnick,) %:comments
}
alias Garbage.Mode {
  if (%Garbage.alignment == 3) Garbage.alignnum.refresh %::chan %::nick
  %:echo %::pre ÿÿ14Mode: %::modes 14by $Garbage.nick %:comments
}

alias Garbage.round {
  var %n $iif($1,$1,0)
  return $left($+(%n,$iif(. !isin %n,.),$str(0,$calc($2 -$iif(. isin %n,1)))),$2)
}
alias Garbage.nick {
  var %n = $Garbage.color($iif($2,%::me,%::nick),%::cmode,%::cnick)
  return $iif($3 && %Garbage.alignment != 1,$Garbage.align(%n,$Garbage.alignnum(%::chan),1),%n $iif($1 && %::address,$+(14[,%::address,14])))
}
alias Garbage.color {
  var %c,%p
  if $left($2,1) isin .@%+-* {
    %p = $ifmatch
    if (%p == *) %c = 07
    elseif (%p isin .@) %c = 04
    else %c = 14
    %p = $+(,%c,$2)
  }
  return $+(%p,,$iif($3 isnum && $3 != %c || $4,$3,15),$1,)
}
alias Garbage.alignnum {
  if (%Garbage.alignnum. [ $+ [ $1 ] ] ) return $ifmatch
  if (%Garbage.alignment == 2) || (%Garbage.alignment.manual && $nick($1,0) > %Garbage.alignment.manual.size) return %Garbage.alignment.size
  %Garbage.alignnum. [ $+ [ $1 ] ] = 0
  var %i 1
  while $nick($1,%i).pnick {
    if ($len($ifmatch) > %Garbage.alignnum. [ $+ [ $1 ] ] ) %Garbage.alignnum. [ $+ [ $1 ] ] = $ifmatch
    inc %i
  }
  if (%Garbage.alignment.size.max < %Garbage.alignnum. [ $+ [ $1 ] ] ) return $ifmatch
  return %Garbage.alignnum. [ $+ [ $1 ] ]
}
alias Garbage.alignnum.refresh {
  var %n = $len($nick($1,$2).pnick),%v = %Garbage.alignnum. [ $+ [ $1 ] ]
  if ($3) && ($len($2) == %v) unset %Garbage.alignnum. [ $+ [ $1 ] ]
  elseif (%n > %v) && (!%Garbage.alignment.manual || %Garbage.alignment.manual.size >= $nick($1,0)) %Garbage.alignnum. [ $+ [ $1 ] ] = %n
}

; $Garbage.extalign(text,N,char,right?,intendN,charcol)
; $Garbage.align(text,N,right?)

alias Garbage.extalign {
  var %g = $str($3,$calc($2 -$len($strip($1)) -$5)),%i = $str($3,$5)
  if $6 isnum {
    %g = $+(,$6,%g)
    %i = $+(,$6,%i)
  }
  if ($4) return $+(%g,$1,%i)
  return $+(%i,$1,%g)
}
alias Garbage.align return $Garbage.extalign($1,$2,ÿ,$3)
; $Garbage.wrap(echo,text,N,intendtext)
alias Garbage.wrap {
  var %i 1,%t,%n $len($strip($4)),%s $calc(($3 -%n) *5)
  while $wrap($2,IBMPC,9,%s,%i) {
    %t = $ifmatch
    if ($left(%t,1) != $chr(32)) %t = $chr(32) $+ %t
    if (%i == 1) _dummy_ $Garbage.boxtext($4,$Garbage.extalign(%t,$calc($3 -%n),ÿ),-1)
    else _dummy_ $Garbage.boxtext($null,$Garbage.extalign(%t,$3,ÿ,0,%n),-1)
    inc %i
  }
}

; $Garbage.box(N,lintend,ltext,mintend,rtext,rintend,closed?,begin?)
; $Garbage.boxsync(N,oldticks,text,closed?,begin?)
; $Garbage.boxtext(intendtext,text,N)

alias Garbage.box {
  var %l = $calc($2 +$len($strip($3)) +$len($strip($5)) +$6 +2),%a = $1 - %l,%a = $iif(%a > $4,%a,$4),%l = %l + %a
  return $+(05,$iif($8,$iif($8 == 2,Ã,Ú),À),$str(Ä,$2),14) $+ $3 $+ $+(05,$str(Ä,$calc(%a +$iif($8,$Garbage.boxfix($1,%l),%Garbage.boxfix))),14) $+ $5 $+ $+(05,$str(Ä,$6),$iif($7,$iif($8,$iif($8 == 2,´,¿),Ù),Ä))
}

alias Garbage.boxsync return $Garbage.box($1,1,$iif(%Garbage.showsync && $2,$calc(($ticks -$2) /1000)),1,$3,1,$4,$5)
alias Garbage.boxtext {
  var %t $len($strip($1))
  if (!$3) %:echo 5³ $1-2
  elseif ($3 isnum 1-) && ($calc(%t +$len($strip($2)) +5) > $3) _dummy_ $Garbage.wrap(%:echo,$strip($2,b),$calc($3 -5 +$iif(!$1,1)),$1)
  else %:echo 5³ $1 $Garbage.align($strip($2,b),$calc($3 -%t -5 +%Garbage.boxfix +$iif(!$1,1))) 5³
}
alias Garbage.boxfix {
  if $calc($2 -$1) > 0 {
    %Garbage.boxfix = $ifmatch
    .timer 1 0 unset %Garbage.boxfix
  }
}
alias garbage {
  var %d garbage
  dialog $iif($dialog(%d),-ev,-m) %d %d
}
dialog garbage {
  title Garbage Theme [/garbage]
  size -1 -1 168 172
  option dbu
  button &OK,1,84 155 38 12,ok
  button &Cancel,2,126 155 38 12,cancel
  box General,3,4 3 160 149
  check Show &information box on startup,4,9 13 150 7
  check Show &sync times on events,5,9 23 150 7
  check Hide /&names list on joins,6,9 33 150 7
  box Whois,7,4 43 160 109
  check Show co&mmon channel number in whoises,8,9 53 150 7
  check Show c&lones using IAL (if any),9,9 63 150 7
  check Show online &time in whoises,10,9 73 150 7
  check Hide whowas replies if they are over,11,9 83 99 7
  edit ,12,109 81 42 11,right limit 2
  scroll ,13,151 81 8 10
  box Channel Nick Alignment,14,4 93 160 59
  text St&ate:,15,9 103 24 7,right
  combo 16,36 101 123 40,drop
  text Nick Si&ze:,17,9 115 24 7,right
  edit ,18,36 113 115 11,right limit 2
  scroll ,19,151 113 8 10
  text Max Si&ze:,20,9 127 24 7,right
  edit ,21,36 125 115 11,right limit 2
  scroll ,22,151 125 8 10
  check Use man&ual setting if channel is over,23,36 139 99 7
  edit ,24,136 137 15 11,right limit 3
  scroll ,25,151 137 8 10
}
ON *:dialog:garbage:*:*:{
  var %d $dname
  if $devent == init {
    if $findfile($mircdir,mdx.dll,1).shortfn {
      var %f $ifmatch,%i 0
      dll %f SetMircVersion $version
      dll %f MarkDialog %d
      while %i < 25 {
        inc %i
        dll %f SetFont %d %i 13 $calc(400 +%i) Tahoma
      }
    }
    if (%Garbage.infobox) did -c %d 4
    if (%Garbage.showsync) did -c %d 5
    if (%Garbage.hidenames) did -c %d 6
    if (%Garbage.showcommon) did -c %d 8
    if (%Garbage.showclones) did -c %d 9
    if (%Garbage.showonline) did -c %d 10
    if (%Garbage.hidewhowas) did -c %d 11

    did -a %d 12 %Garbage.hidewhowas.first
    did -z %d 13 0 9
    did -c %d 13 $calc(10 -%Garbage.hidewhowas.first)

    didtok %d 16 46 Disabled.Manual.Automatic
    did -c %d 16 %Garbage.alignment

    did -a %d 18 %Garbage.alignment.size
    did -z %d 19 0 25
    did -c %d 19 $calc(30 -%Garbage.alignment.size)

    did -a %d 21 %Garbage.alignment.size.max
    did -z %d 22 0 25
    did -c %d 22 $calc(30 -%Garbage.alignment.size.max)

    if (%Garbage.alignment.manual) did -c %d 23

    did -a %d 24 %Garbage.alignment.manual.size
    did -z %d 25 0 997
    did -c %d 25 $calc(999 -%Garbage.alignment.manual.size)
  }
  elseif $devent == scroll {
    did -fo %d $calc($did -1) 1 $calc($iif($did == 25,999,$iif($did == 13,10,30)) -$did($did).sel)
    did -c %d $calc($did -1) 1 1 4
  }
  elseif $devent == edit {
    if ($did == 12) && ($did(12) isnum 1-10) did -c %d 13 $calc(10 -$ifmatch)
    elseif ($did == 18) && ($did(18) isnum 5-30) did -c %d 19 $calc(30 -$ifmatch)
    elseif ($did == 21) && ($did(21) isnum 5-30) did -c %d 22 $calc(30 -$ifmatch)
    elseif ($did == 24) && ($did(24) isnum 2-999) did -c %d 25 $calc(999 -$ifmatch)
  }
  elseif $did == 1 {
    %Garbage.infobox = $did(4).state
    %Garbage.showsync = $did(5).state
    %Garbage.hidenames = $did(6).state
    %Garbage.showcommon = $did(8).state
    %Garbage.showclones = $did(9).state
    %Garbage.showonline = $did(10).state
    %Garbage.hidewhowas = $did(11).state
    if ($did(12) isnum 1-10) %Garbage.hidewhowas.first = $did(12)
    %Garbage.alignment = $did(16).sel
    %Garbage.alignment.manual = $did(23).state
    if ($did(18) isnum 5-30) %Garbage.alignment.size = $did(18)
    if ($did(21) isnum 5-30) %Garbage.alignment.size.max = $did(21)
    if ($did(24) isnum 2-999) %Garbage.alignment.manual.size = $did(24)
    unset %Garbage.alignnum.*
  }
  if ($devent == init) || ($did == 11) did $iif($did(11).state,-e,-b) %d 12,13
  if $devent == init || $did == 16 {
    var %t $did(16).sel
    if (%t == 1) did -b %d 18,19,21,22,23,24,25
    else {
      did $iif(%t == 2,-e,-b) %d 18,19
      did $iif(%t == 2,-b,-e) %d 21,22,23 $+ $iif($did(23).state || %t == 2,$+($chr(44),24,$chr(44),25))
    }
  }
  if ($devent == init) || ($did == 23) did $iif($did(23).state,-e,-b) %d 24,25
}
menu menubar {
  Garbage	 [/garbage]:garbage
}
alias _dummy_ return $1-
