alias pre.error { return 10[-4x10-] }
alias pre.info { return 10[-14i10-] }
alias pre.connect { return 10[-14c10-] }
alias pre.time { return 10[9 $time(HH:nn:ss) 10] }

alias power.textchan { %:echo 10[ $+ %::cnick $iif(%::cmode == $null, ,%::cmode) 10] $+ %::cnick %::nick 10> %::text }
alias power.textchanself { %:echo 10[ $+ %::cnick $iif(%::cmode == $null, ,%::cmode) 10] $+ %::cnick %::me 10> %::text }
alias power.actionchan { %:echo 10[13 $iif(%::cmode == $null, ,%::cmode) 10]13 * %::nick %::text }
alias power.actionchanself { %:echo 10[13 $iif(%::cmode == $null, ,%::cmode) 10]13 * %::nick %::text }
alias power.noticechan { %:echo 10[8 %::nick $+ @ $+ %::chan $+ : %::text 10] }
alias power.notice { %:echo 10[8 %::nick $+ : %::text 10] }
alias power.noticeself { %:echo 10[8 notice to %::target $+ : %::text 10] }
alias power.noticeselfchan { %:echo 10[ notice to %::target $+ : %::text 10] }
alias power.textquery { %:echo 10< %::nick 10> %::text }
alias power.textqueryself { %:echo 10< %::me 10> %::text }
alias power.actionquery { %:echo 13* %::nick %::text }
alias power.actionqueryself { %:echo 13* %::me %::text }
alias power.textmsg { %:echo 10[ %::target $+ : %::text 10] }
alias power.textmsgself { %:echo 10[ msg to %::target $+ : %::text 10] }

alias power.mode { %:echo 10[14 %::nick sets mode: %::modes 10] }
alias power.modeuser { %:echo 10[14 %::nick sets usermode: %::modes 10] }
alias power.join { %:echo 10[3 %::nick joins %::chan 10] (3 %::address 10) }
alias power.joinself { %:echo 10[3 You are now talking in %::chan 10] }
alias power.part { %:echo 10[7 %::nick parts %::chan 10] (7 %::address 10) }
alias power.kick { %:echo 10[7 %::knick was kicked by %::nick 10] (7 %::text 10) }
alias power.kickself { %:echo 10[7 You were kicked by %::nick 10] (7 %::text 10) }
alias power.quit { %:echo 10[7 %::nick quits %::server 10] (7 %::text 10) }
alias power.topic { %:echo 10[14 %::nick changed topic into: %::text 10] }
alias power.nick { %:echo 10[6 %::nick is now known as %::newnick 10] }
alias power.nickself { %:echo %::pre 10[6 You changed your nick into %::newnick 10] }
alias power.invite { %:echo %::pre 10[8 %::nick invites you to join %::chan 10] }
alias power.servererror { %:echo $pre.error 14 $+ %::server $+ : %::text }
alias power.rejoin { %:echo %::pre 10[3 Attempting to rejoin channel 10] }
alias power.ctcp { %:echo %::pre 10[8 ctcp %::ctcp from %::nick $+  $iif(%::text != $null,: %::text) 10] }
alias power.ctcpchan { %:echo %::pre 10[8 ctcp %::ctcp from %::nick on %::chan $+  $iif(%::text != $null,: %::text) 10] }
alias power.ctcpself { %:echo %::pre 10[8 ctcp %::ctcp to %::nick $+  $iif(%::text != $null,: %::text) 10] }
alias power.ctcpchanself { %:echo %::pre 10[8 ctcp %::ctcp to %::chan $+  $iif(%::text != $null,: %::text) 10] }
alias power.ctcpreply { %:echo %::pre 10[8 ctcpreply %::ctcp from %::nick $+  $iif(%::text != $null,: %::text) 10] }
alias power.ctcpreplyself { %:echo %pre 10[8 ctcpreply %::ctcp to %::nick $+  $iif(%::text != $null,: %::text) 10] }
alias power.notify { %:echo %::pre 14 $+ %::nick is now online! }
alias power.unotify { %:echo %::pre 14 $+ %::nick is now offline! }
alias power.wallop { %:echo 10[8 wallop from %::nick $+ : %::text 10] }
alias power.noticeserver { %:echo $pre.connect 14 $+ %::nick $+ 0 %::text }

alias power.dns { %:echo %::pre ------------ 9DNS lookup report ------------ | %:echo %::pre 14Address: $address }
alias power.dnserror { %:echo $pre.error 4Failed: unable to resolve address! | %:echo ---------- 9End of lookup report ---------- }
alias power.dnsresolve { %:echo %::pre 14Resolved: $raddress | %:echo ---------- 9End of lookup report ---------- }

alias power.raw.311 {
  %:echo %::pre ---------------- 9Whois report ----------------
  %:echo %::pre 14Nickname: %::nick
  %:echo %::pre 14Real Name: %::realname
  %:echo %::pre 14Address: %::address
}
alias power.raw.314 {
  %:echo %::pre ---------------- 9Whowas report ----------------
  %:echo %::pre 14Nickname: %::nick
  %:echo %::pre 14Real Name: %::realname
  %:echo %::pre 14Address: %address
}
alias power.raw.319 { %:echo %::pre 14Channels: %::chan }
alias power.raw.312 { %:echo %::pre 14Server: %::wserver %::serverinfo }
alias power.raw.301 { %:echo %::pre 14Away: %::text }
alias power.raw.307 { %:echo %::pre 14Identified: %::isregd }
alias power.raw.313 { %:echo %::pre 14Oper: %::isoper %::operline }
alias power.raw.317 {
  %:echo %::pre 14Idle: $duration(%::idletime)
  %:echo %::pre 14Signed in: %::signontime
}
alias power.raw.318 { %:echo %::pre ------------9 End of Whois report ------------ }
alias power.raw.369 { %:echo %::pre ------------9 End of Whowas report ------------ }


raw 1:*:{ halt }
raw 2:*:{ halt }
raw 3:*:{ echo -s $pre.connect 0----------------- 9server info start 0----------------- | echo -s $pre.connect 0created:14 $6 $7 $8 $9 0at14 $11 $12 | halt }
raw 4:*:{ echo -s $pre.connect 0server address:14 $2 0version:14 $3 0 | echo -s $pre.connect 0modes (user):14 $4 0 | echo -s $pre.connect 0modes (channel):14 $5 | halt }
raw 5:*:{ halt }

raw 251:*:{ echo -s $pre.connect 14 $+ $4 0users online (14 $+ $+ $7 0invisibles) on 14 $+ $10 0servers | halt }
raw 252:*:{ echo -s $pre.connect 14 $+ $2 0operators online | halt }
raw 253:*:{ echo -s $pre.connect 0unknown connections:14 $2 | halt }
raw 254:*:{ echo -s $pre.connect 14 $+ $2 0channels formed on this server | halt }
raw 255:*:{ echo -s $pre.connect 0clients:14 $4 0servers:14 $7 | echo -s $pre.connect 0------------------ 9server info end 0------------------ | halt }
raw 265:*:{ halt }
raw 266:*:{ halt }

raw 301:*:{ echo -a $pre.time $pre.info 14 $2 0is away: $3- | halt }
raw 305:*:{ echo -s $pre.info 0You are no longer marked as being away | halt }
raw 306:*:{ echo -s $pre.info 0You have been marked as being away | halt }
raw 315:*:{ halt }
raw 324:*:{ echo -s $pre.info 14 $+ $2 0channel modes:14 $3 | halt }
raw 329:*:{ echo -s $pre.info 14 $+ $2 0channel created on:14 $asctime($3) | halt }
raw 331:*:{ echo -a $pre.time $pre.info 10[14 no topic set 10] | halt }
raw 332:*:{ echo -a $pre.time $pre.info 10[14 topic is: $3- 10] | halt }
raw 333:*:{ echo -s $pre.info 14 $+ $2 0topic set by:14 $3 0on14 $asctime($4) | halt }
raw 341:*:{ echo -a $pre.time $pre.info 14 $2 0has been invited to14 $3- | halt }
raw 353:*:{ echo -s $pre.info 14 $+ $3 0users in channel: $4- | halt }
raw 372:*:{ halt }
raw 375:*:{ halt }
raw 376:*:{ halt }
raw 381:*:{ echo -a $pre.time $pre.info 0You are now an IRC operator | halt }
raw 391:*:{ echo -a $pre.time $pre.connect 0 $+ $3- | halt }

raw 401:*:{ echo -a $pre.time $pre.error 14 $2 $+ : 0No such Nickname | halt }
raw 402:*:{ echo -a $pre.time $pre.error 0unable to reach server | halt }
raw 403:*:{ echo -a $pre.time $pre.info 14 $2 $+ : 0no such channel | halt }
raw 404:*:{ echo -a $pre.time $pre.error 0cannot send data to channel! | halt }
raw 405:*:{ echo -a $pre.time $pre.error 0You have joined too many channels | halt }
raw 406:*:{ echo -a $pre.time $pre.info 14 $2 $+ : 0There was no such nickname | halt }
raw 407:*:{ echo -a $pre.time $pre.info 14 $2 $+ : 0Duplicate recipients. No message delivered | halt }
raw 409:*:{ echo -a $pre.time $pre.info 0No origin specified | halt }
raw 421:*:{ echo -a $pre.time $pre.info 14 $+ $2 $+ 0: unknown command | halt }
raw 422:*:{ echo -s $pre.connect 0MOTD File is missing | halt }
raw 423:*:{ echo -a $pre.time $pre.info 14 $2 $+ : 0No administrative info available | halt }
raw 431:*:{ echo -a $pre.time $pre.info 0No nickname given | halt }
raw 432:*:{ echo -a $pre.time $pre.error 0Errorous nickname | halt }
raw 433:*:{ echo -a $pre.time $pre.error 0Nickname14 $2 0is already in use | halt }
raw 436:*:{ echo -a $pre.time $pre.error 0Nickname collision:14 $2 0is already registered | halt }
raw 441:*:{ echo -a $pre.time $pre.info 14 $2 0is not in14 $3 | halt }
raw 442:*:{ echo -a $pre.time $pre.info 0You aren't in channel  $2 | halt }
raw 443:*:{ echo -a $pre.time $pre.info 14 $2 0is already in14 $3 | halt }
raw 451:*:{ echo -a $pre.time $pre.error 0you must register first | halt }
raw 461:*:{ echo -a $pre.time $pre.error 14 $2 $+ : 0Not enough parameters | halt }
raw 462:*:{ echo -a $pre.time $pre.error 0You may not reregister | halt }
raw 463:*:{ echo -a $pre.time $pre.error 14 $mid($address($me,2),5) $+ : 0Your host isn't among the privileged | halt }
raw 464:*:{ echo -a $pre.time $pre.error 0Password incorrect | halt }
raw 465:*:{ echo -a $pre.time $pre.error 14(k-line) 0You are banned from 14 $server - gg | halt }
raw 467:*:{ echo -a $pre.time $pre.error 14 $2 0Channel key is already set | halt }
raw 471:*:{ echo -a $pre.time $pre.error 14 $2 $+ : 0Cannot join channel (+l) | halt }
raw 473:*:{ echo -a $pre.time $pre.error 14 $2 $+ : 0Cannot join channel (+i) | halt }
raw 474:*:{ echo -a $pre.time $pre.error 0Cannot join channel14 $2 0- you are 14banned 0(+b) | halt }
raw 475:*:{ echo -a $pre.time $pre.error 14 $2 $+ : 0Cannot join channel (+k) | halt }
raw 477:*:{ echo -a $pre.time $pre.error 14 $2 $: 0Cannot join channel (+r) | halt }
raw 481:*:{ echo -a $pre.time $pre.error 0You must be an ircop | halt }
raw 482:*:{ echo -a $pre.time $pre.error 14 $2 0you must be op to use this command | halt }
raw 483:*:{ echo -a $pre.time $pre.error 0you cant kill the server... | halt }
raw 491:*:{ echo -a $pre.time $pre.error 0No O-lines for your host | halt }

raw 501:*:{ echo -a $pre.time $pre.info 0Unknown MODE flag | halt }
raw 502:*:{ echo -a $pre.time $pre.error 0Cant change mode for other users | halt }
