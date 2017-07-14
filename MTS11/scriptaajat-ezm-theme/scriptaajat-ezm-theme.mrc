on *:start:{ set %scr.ticks $calc(($ctime - $left($ticks,-3)) *1000) } 
alias scr.clock { return $+($asctime($left($round($calc($ticks + %scr.ticks -15000),0),-3),HHnnss),$right($round($calc($ticks + %scr.ticks),0),3)) }
alias scr.tmsmp { return $+(14«11,$mid($scr.clock,1,2),10,$mid($scr.clock,3,2),11,$mid($scr.clock,5,2),10,$mid($scr.clock,7,3),14») }
alias scr.bra { return $+(14«,$1-,14») }
alias clearall { if ($1) { clearall $1- } | else { clearall -snqmtg } }
alias scr.parentext { %:echo $scr.tmsmp $+(14«,%::text,14») }
alias scr.textchan { %:echo $scr.tmsmp $scr.bra($+(11,%::cmode,15,%::nick)) %::text }
alias scr.textchanself { %:echo $scr.tmsmp $scr.bra($+(05,%::cmode,10,%::me)) %::text }
alias scr.actionchan { %:echo $scr.tmsmp 07ª $scr.bra($+(11,%::cmode,15,%::nick)) %::text }
alias scr.actionchanself { %:echo $scr.tmsmp 07ª $scr.bra($+(05,%::cmode,10,%::me)) %::text }

alias scr.noticechan { %:echo $scr.tmsmp 14‹— 07× $scr.bra($+(11,%::cmode,15,%::nick,05•15,%::chan)) %::text }
alias scr.notice { %:echo $scr.tmsmp 14‹— 07× $scr.bra($+(15,%::nick)) %::text }
alias scr.noticeself { %:echo $scr.tmsmp 14—› 07× $scr.bra($+(15,%::target)) %::text }
alias scr.noticeselfchan { %:echo $scr.tmsmp 14—› 07× $scr.bra($+(10,%::me,05•10,%::chan)) %::text }

alias onotice { .notice $+(@,$chan) $1- | echo $chan $scr.tmsmp 14—› 07× $scr.bra($+(05,$left($nick($chan,$me).pnick,1),10,$me,05•10,$chan)) $1- }
alias scr.textquery { %:echo $scr.tmsmp $scr.bra($+(15,%::nick)) %::text }
alias scr.textqueryself { %:echo $scr.tmsmp $scr.bra($+(10,%::me)) %::text }
alias scr.actionquery { %:echo $scr.tmsmp 07ª $scr.bra($+(15,%::nick)) %::text }
alias scr.actionqueryself { %:echo $scr.tmsmp 07ª $scr.bra($+(10,%::me)) %::text }
alias scr.textmsg { %:echo $scr.tmsmp 07‹— $scr.bra($+(15,%::nick)) %::text }
alias scr.textmsgself { %:echo $scr.tmsmp 07—› $scr.bra($+(10,%::target)) %::text }
alias scr.mode { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Mode,05•,%::chan)) $scr.bra($+(11,%::cmode,15,%::nick)) %::modes }
alias scr.join { %:echo $scr.tmsmp %::pre $scr.bra($+(14,Join)) $scr.bra($+(14,%::nick,!,%::address)) }
alias scr.part { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,Part)) $scr.bra($+(05,%::nick,!,%::address)) $iif(%::text,$scr.bra($+(05,%::text)),$null) }
alias scr.kick { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,Kick)) $scr.bra($+(05,%::nick,!,%::address)) 05kicked $scr.bra($+(05,%::knick)) $iif(%::text,$scr.bra($+(05Reason:,$chr(32),%::text)),$null) }
alias scr.quit { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,Quit)) $scr.bra($+(05,%::nick,!,%::address)) $iif(%::text,$scr.bra($+(05Reason:,$chr(32),%::text)),$null) }
alias scr.nick { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Nick)) $scr.bra($+(15,%::nick)) 15is now known as $scr.bra($+(15,%::newnick)) }
alias scr.topic { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Topic,05•,%::chan)) $scr.bra($+(15,%::nick)) 15changed the topic to $scr.bra($+(15,%::text)) }
alias scr.invite { %:echo $scr.tmsmp 11‹— $scr.bra($+(15,Invite)) $scr.bra($+(15,%::nick)) 15invites you to join $scr.bra($+(15,%::chan)) }
alias scr.rejoin { %:echo $scr.tmsmp %::pre $scr.bra($+(14,Rejoin)) $scr.bra($+(14,%::nick)) 14rejoined $scr.bra($+(14,%::chan)) }
alias scr.modeuser { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Usermode)) $scr.bra($+(15,%::nick)) %::modes }
alias scr.kickself { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,Kick)) $scr.bra($+(05,%::me,!,%::address)) 05kicked $scr.bra($+(05,%::knick)) $iif(%::text,$scr.bra($+(05Reason:,$chr(32),%::text)),$null) }
alias scr.nickself { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Nick)) $scr.bra($+(10,%::me)) 15is now known as $scr.bra($+(10,%::newnick)) }
alias scr.dns { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Dns)) 14resolving $scr.bra($+(15,%::address)) }
alias scr.dnserror { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Dns)) 14unable to resolve $scr.bra($+(15IP)) }
alias scr.dnsresolve { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Dns)) 14resolved $scr.bra($+(15,%::address)) $scr.bra($+(15,%::raddress)) }
alias scr.ctcp { echo $iif($active,$active,-s) $scr.tmsmp 11‹— $scr.bra($+(15,%::nick)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.ctcpchan { %:echo $scr.tmsmp 11‹— $scr.bra($+(11,%::cmode,15,%::nick,05•15,%::chan)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.ctcpself { %:echo $scr.tmsmp %::pre $scr.bra($+(15,%::target)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.ctcpchanself { %:echo $scr.tmsmp %::pre $scr.bra($+(15,%::target)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.ctcpreply { %:echo $scr.tmsmp 11‹— $scr.bra($+(15,%::nick)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.ctcpreplyself { %:echo $scr.tmsmp %::pre $scr.bra($+(15,%::target)) $scr.bra($+(4,%::ctcp)) $iif(%::text,$scr.bra($+(15,%::text)),$null) }
alias scr.notify { %:echo $scr.tmsmp 12—› $scr.bra($+(15,%::nick)) 15is online. }
alias scr.unotify { %:echo $scr.tmsmp 12‹— $scr.bra($+(15,%::nick)) 15is offline. }
alias scr.servererror { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,ServerError)) %::text }
alias scr.wallop { echo $iif($active,$active,-s) $scr.tmsmp 14‹— 07× $scr.bra($+(15,Wallop)) $scr.bra($+(15,%::nick)) %::text }
alias scr.noticeserver { %:echo $scr.tmsmp 11‹— $scr.bra($+(05,ServerNotice)) %::text }
alias scr.echo { %:echo $scr.tmsmp %::pre $scr.bra($+(14,Echo)) %::text }
alias scr.echotarget { %:echo $scr.tmsmp %::pre $scr.bra($+(14,Echo)) $scr.bra($+(14,%::target)) %::text }
alias scr.error { %:echo $scr.tmsmp %::pre $scr.bra($+(04,Error)) %::text }
alias scr.load { clearall | %:echo $scr.tmsmp %::pre 14Loaded Scriptaajat-EZM-Theme. v0.1b }
alias scr.unload { clearall | %:echo $scr.tmsmp %::pre 14Unloaded Scriptaajat-EZM-Theme. v0.1b }

alias scr.RAW.001 { %:echo $scr.tmsmp %::pre Hello and welcome to 12m4IR8C }
alias scr.RAW.002 { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Host)) $+(15,%::server,) running version $scr.bra($+(15,%::value)) }
alias scr.RAW.003 { %:echo $scr.tmsmp %::pre Server created on $scr.bra($+(15,%::value)) }
alias scr.RAW.005 { %:echo $scr.tmsmp %::pre Protocols supported $scr.bra($+(15,%::text)) }
alias scr.RAW.250 { %:echo $scr.tmsmp %::pre Total connections $scr.bra($+(15,%::value)) }
alias scr.RAW.251 { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Users)) %::users $scr.bra($+(15,Invisible)) %::text $scr.bra($+(15,Servers)) %::value }
alias scr.RAW.252 { %:echo $scr.tmsmp %::pre Operators online $scr.bra($+(15,%::value)) }
alias scr.RAW.253 { %:echo $scr.tmsmp %::pre Unknown connections $scr.bra($+(15,%::value)) }
alias scr.RAW.254 { %:echo $scr.tmsmp %::pre Channels formed $scr.bra($+(15,%::value)) }
alias scr.RAW.255 { %:echo $scr.tmsmp %::pre Local clients $scr.bra($+(15,%::users)) on $scr.bra($+(15,%::value)) server(s) }
alias scr.RAW.265 { %:echo $scr.tmsmp %::pre Local users $scr.bra($+(15,%::users)) Max $scr.bra($+(15,%::value)) }
alias scr.RAW.266 { %:echo $scr.tmsmp %::pre Global users $scr.bra($+(15,%::users)) Max $scr.bra($+(15,%::value)) }
alias scr.RAW.315 { %:echo $scr.tmsmp %::pre End of $scr.bra($+(14,/who)) list for $scr.bra($+(15,%::chan)) }

alias scr.joinself {
  set %scr.j.ticks $ticks
  %:echo $scr.tmsmp $+(14,$chr(124),$str(¯,90)) 
  %:echo $scr.tmsmp $+(14,$chr(124),) $scr.bra($+(15,Joined)) $scr.bra($+(15,%::chan)) $iif($chan(%::chan).mode,$scr.bra($+(15,Modes,$chr(32),$chan(%::chan).mode)),$null)
}
alias scr.RAW.332 { $scr.top1c(%::text) }
alias scr.RAW.333 { %:echo $scr.tmsmp $+(14,$chr(124),) 15The topic was set by $scr.bra($+(15,%::nick)) $scr.bra($+(15,%::text)) }
alias scr.RAW.353 { $scr.names(10,%::text) }

alias scr.RAW.324 {
  $iif(%scr.names1,%:echo $scr.tmsmp $+(14,$chr(124),) 15End of $scr.bra($+(15/names)),$null)
  unset %scr.names1
  var %c = %::chan,%n1 = $nick(%c,0,a),%o1 = $nick(%c,0,o),%h1 = $nick(%c,0,h),%v1 = $nick(%c,0,v),%r1 = $nick(%c,0,r)
  var %o2 = $+($round($calc((%o1 / %n1) *100),0),$chr(37)),%h2 = $+($round($calc((%h1 / %n1) *100),0),$chr(37)),%v2 = $+($round($calc((%v1 / %n1) *100),0),$chr(37)),%r2 = $+($round($calc((%r1 / %n1) *100),0),$chr(37))
  %:echo $scr.tmsmp $+(14,$chr(124),) $iif(%n1,$scr.bra(15Total) %n1 ppl,$null) $iif(%o1,$scr.bra(15OP) $+(%o1,/,%o2),$null) $iif(%h1,$scr.bra(15Half-OP) $+(%h1,/,%h2),$null) $iif(%v1,$scr.bra(15Voice) $+(%v1,/,%v2),$null) $iif(%r1,$scr.bra(15Regular) $+(%r1,/,%r2),$null)
}


alias scr.RAW.329 { 
  %:echo $scr.tmsmp $+(14,$chr(124)) 15Join synched in $scr.bra($+(15,$calc($ticks - %scr.j.ticks),ms)) 
  unset %scr.j.ticks
  %:echo $scr.tmsmp $+(14,$chr(124),$str(_,90))
}
alias scr.RAW.366 { haltdef }
alias scr.RAW.341 { %:echo $scr.tmsmp %::pre $scr.bra($+(15,Invite)) $scr.bra($+(15,%::target)) 15has been invited to join $scr.bra($+(15,%::chan)) }
alias scr.RAW.352 { %:echo $scr.tmsmp %::pre $scr.bra($+(15/who)) $scr.bra($+(14,%::nick,!,%::address)) $scr.bra($+(15,%::realname)) }
alias scr.RAW.372 { %:echo $scr.tmsmp %::text }
alias scr.RAW.375 { %:echo $scr.tmsmp %::pre Start of $scr.bra($+(15/motd)) }
alias scr.RAW.376 { %:echo $scr.tmsmp %::pre End of $scr.bra($+(15/motd)) }
alias scr.RAW.391 { %:echo $scr.tmsmp %::pre Date $scr.bra($+(14,%::value)) }
alias scr.RAW.401 { %:echo $scr.tmsmp %::pre No such nickname $scr.bra($+(15,%::nick)) }
alias scr.RAW.403 { %:echo $scr.tmsmp %::pre No such channel $scr.bra($+(15,%::chan)) }
alias scr.RAW.404 { %:echo $scr.tmsmp %::pre Unable to send message to $scr.bra($+(15,%::chan)) }
alias scr.RAW.421 { %:echo $scr.tmsmp %::pre Invalid command $scr.bra($+(15/,%::value)) }
alias scr.RAW.433 { %:echo $scr.tmsmp %::pre Nickname in use $scr.bra($+(15,%::nick)) }
alias scr.RAW.471 { %:echo $scr.tmsmp %::pre Can't join $scr.bra($+(15,%::chan)) $scr.bra($+(15,Full (+l))) }
alias scr.RAW.473 { %:echo $scr.tmsmp %::pre Can't join $scr.bra($+(15,%::chan)) $scr.bra($+(15,Invite only (+i))) }
alias scr.RAW.474 { %:echo $scr.tmsmp %::pre Can't join $scr.bra($+(15,%::chan)) $scr.bra($+(15,You're banned (+b))) }
alias scr.RAW.475 { %:echo $scr.tmsmp %::pre Can't join $scr.bra($+(15,%::chan)) $scr.bra($+(15,requires a key (+k))) }
alias scr.RAW.482 { %:echo $scr.tmsmp %::pre You're not opped on $scr.bra($+(15,%::chan)) }
alias scr.RAW.Other { %:echo $scr.tmsmp %::pre %::text }

alias scr.RAW.311 { 
  set %scr.whois 1
  %:echo $scr.tmsmp $+($chr(124),$str(¯,90))
  %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Host) $+(15,%::address) $scr.bra(15Name) $+(15,%::realname)
}
alias scr.RAW.314 {
  set %scr.whois 1
  %:echo $scr.tmsmp $+($chr(124),$str(¯,90))
  %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Host) $+(15,%::address) $scr.bra(15Name) $+(15,%::realname) 
}
alias scr.RAW.319 { 
  if (%::chan) { 
    %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Channels) 
    set %scr.names1 1 
    $scr.names(6,0,%::chan) 
  }
}

alias scr.RAW.312 { if (%::server) { %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Server Info) $+(15,%::serverinfo) $scr.bra(15Server) $+(15,%::server) } }
alias scr.RAW.301 { if (%::away) { %:echo $scr.tmsmp $iif(%scr.whois,$chr(124),%::pre) $scr.bra($+(15,%::nick)) $scr.bra(15Is Away) $+(15Reason:,$chr(32),%::text) } }
alias scr.RAW.313 { if (%::isoper) { %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) 15Is an 10IRC Operator } }

alias scr.RAW.317 { if (%::signontime) { %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Idle) $+(15,$duration(%::idletime)) $scr.bra(15Signed) $+(15,$duration($calc($ctime - $ctime(%::signontime)))) ago } }
alias scr.RAW.330 { if ((%::text) && (QuakeNet == $network)) { %:echo $scr.tmsmp $chr(124) $scr.bra($+(15,%::nick)) $scr.bra(15Authed) $+(15,$gettok(%::text,4,32)) } }

alias scr.RAW.318 { %:echo $scr.tmsmp $+($chr(124),$str(_,90)) | unset %scr.names1 %scr.whois }
alias scr.RAW.369 { %:echo $scr.tmsmp $+($chr(124),$str(_,90)) | unset %scr.names1 %scr.whois }

alias scr.whois { haltdef }
alias scr.whowas { haltdef }

alias scr.names {
  $iif(!%scr.names1,%:echo $scr.tmsmp $+(14,$chr(124),) 15Start of $scr.bra($+(15/names)),$null)
  set %scr.names1 1
  var %m = $gettok($1-,1,32),%n = $gettok($1-,3-,32),%n = $sorttok(%n,32,c)
  if ($len(%n) > 0) { 
    while ($numtok(%n,32) > 0) {
      %:echo $scr.tmsmp $+(14,$chr(124),) $iif(%::nick,$scr.bra($+(15,%::nick)),$null) $+(15,$replace($gettok(%n,$+(1-,%m),32),@,11@15,+,11+15))
      var %n = $deltok(%n,$+(1-,%m),32) 
    } 
  }
}
alias scr.top1c {
  %:echo $scr.tmsmp $+(14,$chr(124),) $scr.bra($+(15The Topic is))
  var %n = $1-
  if ($len(%n) > 0) { 
    while ($numtok(%n,32) > 0) {
      %:echo $scr.tmsmp $+(14,$chr(124),) $+(10[,$mid(%n,1,100),10])
      var %n = $remove(%n,$mid(%n,1,100))
    } 
  }
}
