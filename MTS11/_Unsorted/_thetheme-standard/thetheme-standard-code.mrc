alias tt-script.name { return The Theme - Standard }
alias thetheme.mode.mode {
  %:echo 03 [mode cange]01 [ %::modes ] ( %::nick )
}
alias thetheme.mode.me {
  %:echo 03 [mode change]01 [ $+ %::modes $+ ]03 [ $+ %::me $+ ]
}

alias thetheme.textquery {
  %:echo 03(01 $+ %::cmode $+ %::nick $+ 03) %::text
}
alias thetheme.textqueryself {
  %:echo 03(01 $+ %::cmode $+ %::me $+ 03) %::text
}

alias thetheme.textchanself {
  %:echo 03(01 $+ %::cmode $+ %::me $+ 03) %::text
}
alias thetheme.whois { 
  %:echo ÿÿ
  %:echo 03[whois]01 nick: %::nick - addr: %::address - %::isregd registered
  %:echo 03[whois]01 realname: %::realname -   $+ %::isoper $+  ircop
  %:echo 03[whois]01 server: %::wserver - idle: %::idletime - signon: %::signontime 
  %:echo 03[whois]01 away: %::away
  %:echo 03[whois]01 chans: $replace(%::chan,@#,@#,+#,#) -
  %:echo ÿ
}
alias thetheme.topic.set {
  %:echo 03 [channel topic]01 %::text
}
alias thetheme.topic.current {
  %:echo 03 [channel topic]01 %::text
}
alias thetheme.raw329 {
  %:echo 03 [channel created]01 [ $asctime( %::text ,dddd mmm dd yyyy HH:nn:ss) ]  
}
alias thetheme.chan.modes {
  %:echo 03 [channel modes]01 [03 $+ %::modes $+ 01]
}
alias thetheme.topicset {
  %:echo 03 [tpoic set]01 *on* [03 $+ %::text $+ 01] *by* [03 $+ %::value $+ 01]

}
alias thetheme.nick.not {
  %:echo 03 [error]:01 %::nick does not exist. Sorry

}
alias thetheme.nick.inuse {
  %:echo 03 [error]:01 %::nick is already in use. Sorry
}
alias thetheme.nick.invalid {
  %:echo 03 [error]:01 %::nick is invalid. Sorry
}

alias thetheme.chan.not {
  %:echo 03 [error]:01 %::chan does not exist. Sorry
}
alias thetheme.chan.mod {
  %:echo 03 [error]:01 %::chan cannot be accessed due to its moderated (mode: +m)
}
alias thetheme.chan.full {
  %:echo 03 [error]:01 %::chan cannot be accessed due to its full. 
}
alias thetheme.chan.inv {
  %:echo 03 [error]:01 %::chan cannot be accessed due to its invite only (mode: +i)
}
alias thetheme.error {
  if ( $+ %::text $+ ) {
    %:echo 03 [error]:01 %::text
  }
  else {
    %:echo 03 [error]:01 An unknown error has occured.
  }                 
}
alias thetheme.chan.banned {
  %:echo 03 [error]:01 %::chan cannot be accessed due to you are banned from it. 
}
alias thetheme.chan.keyin {
  %:echo 03 [error]:01 %::chan cannot be accessed due to its keyed (mode: +k)
  %:echo 03 [specialtip]:01 ÿÿÿÿÿÿÿ To do this type in /join <#channel> <key>
}
alias thetheme.chan.key {
  %:echo 03 [error]:01 %::chan cannot be accessed due to the fact you've entered the wrong key.
}

alias thetheme.chan.op {
  %:echo 03 [error]:01 %::chan cannot be accessed due to its op only (you need to be a OP of the channel)
}

alias thetheme.cmd.invalid {
  %:echo 03 [error]:01 %::value  %::text
}
alias thetheme.dns.error {
  %:echo 03 [dns error]:01 %::address cannot be looked up.
}

alias thetheme.notice.chan {
  %:echo 03  $+ %::nick $+  01 notifies  $+ %::chan $+ : %::text
}
alias thetheme.notice.notice {
  %:echo 03  $+ %::me $+  01 notifies  $+ %::target $+ : %::text
}
alias thetheme.notice.self {
  %:echo 03  $+ %::me $+  01 notifies  $+ %::target $+ : %::text
}
alias thetheme.notice.chanself {
  %:echo 03  $+ %::me $+  01 notifies  $+ %::chan $+ : %::text
}

alias thetheme.msg.quit {
  %:echo 03 [quit]01 %::nick ( $+ %::address $+ )
  if ( $+ %::parentext == %::null $+ ) { 
    %:echo  03 [reason]01 No Reason 
  }
  else { 
    %:echo  03 [reason]01 %::parentext 
  }
}
alias thetheme.msg.invite {
  %:echo 03 [invitation]01 from: %::nick to: %::target where: %::chan 
}
alias thetheme.msg.youinvite {
  %:echo 03 [invitation]01 from: %::me to: %::nick where: %::chan 
}
alias thetheme.msg.join {
  %:echo 03 [joined]01 %::nick ( $+ %::address $+ )
}
alias thetheme.msg.kick {
  %:echo 03 [kicked]01 by: %::nick ( $+ %::address $+ )
  if ( $+ %::parentext == %::null $+ ) { 
    %:echo  03 [reason]01 No Reason 
  }
  else { 
    %:echo  03 [reason]01 %::parentext 
  }
}

alias thetheme.msg.dns {
  %:echo 03 [dns]:01 %::address  is being looked up
}
alias thetheme.msg.kicked {
  %:echo 03 [kicked]01 by: %::nick ( $+ %::address $+ )
  if ( $+ %::parentext == %::null $+ ) { 
    %:echo  03 [reason]01 No Reason 
  }
  else { 
    %:echo  03 [reason]01 %::parentext 
  }
}
alias thetheme.dns.re {
  %:echo 03 [dns]:01 %::address  is resolved to  $+ %::raddress $+ 
}
alias thetheme.notice.server {
  %:echo 03 [snotice]:01 %::text
}
alias thetheme.wallop {
  %:echo 03 [wallop]:01 %::text
}
alias thetheme.unnotify {
  %:echo 03 [unnotify]:01 %::nick - %::text
}
alias thetheme.notify {
  %:echo 03 [notify]:01 %::nick - %::text
}
alias thetheme.ctcp.reply {
  %:echo 03 [ctcp reply]:01 %::nick -  $+ %::ctcp $+  - %::text
}
alias thetheme.ctcp.reply.self {
  %:echo 03 [ctcp reply]:01 %::nick -  $+ %::ctcp $+ 
}
alias thetheme.ctcp.chan.self {
  %:echo 03 [ctcp request]:01 %::chan -  $+ %::ctcp $+  - %::text
}
alias thetheme.ctcp.self {
  %:echo 03 [ctcp request]:01 %::chan -  $+ %::ctcp $+  - %::text
}
alias thetheme.ctcp.chan {
  %:echo 03 [ctcp request]:01 %::chan -  $+ %::ctcp $+  from  $+ %::nick $+ 
}
alias thetheme.ctcp.ctcp {
  %:echo 03 [ctcp]:01 %::nick -  $+ %::ctcp $+ 
}
alias thetheme.msgse {
  %:echo 03 [message]:01 from %::me $+ ; to:  $+ %::target $+  ננ %::text

}
alias thetheme.msg {
  %:echo 03 [message]:01 from  $+ %::nick $+ ; to:  $+ %::target $+  ננ %::text
}

alias thetheme.msg.rejoin {
  %:echo 03 [rejoining]:01  $+ %::chan $+ 
}
alias thetheme.msg.chgnick {
  %:echo 03 [nickchange]:01  $+ %::me $+  to  $+ %::newnick $+ 
}
alias thetheme.msg.nickchg {
  %:echo 03 [nickchange]:01  $+ %::nick $+  to  $+ %::newnick $+ 
}

alias thetheme.msg.joinme {
  %:echo 03 [joined]:01  $+ %::chan $+ 
}
alias thetheme.msg.part {
  %:echo 03 [parted]01  $+ %::nick $+ 
  if ( $+ %::parentext == %::null $+ ) { 
    %:echo  03 [reason]01 No Reason 
  }
  else { 
    %:echo  03 [reason]01 %::parentext 
  }
}

alias thetheme.serv.startup {
  %:echo 03 [server]:01 on  $+ %::server $+  running  $+ %::value $+ 
}
alias thetheme.serv.created {
  %:echo 03 [server]:01 created on  $+ %::value $+ 
}
alias thetheme.serv.proto {
  %:echo 03 [server]:01 protocols supported  $+ %::text $+ 
}
alias thetheme.serv.modes {
  %:echo 03 [server]:01 current modes  $+ %::modes $+ 
}
alias thetheme.serv.con {
  %:echo 03 [server]:01 total connections  $+ %::nick $+ 
}
alias thetheme.serv.modes {
  %:echo 03 [server]:01 modes for  $+ %::nick $+  are  $+ %::modes $+ 
}
alias thetheme.serv.users {
  %:echo 03 [server]:01 users online  $+ %::users $+ ,  $+ %::text $+  are invisable
  %:echo 03 [server]:01 servers  $+ %::value $+ 
}
alias thetheme.serv.ops {
  %:echo 03 [server]:01 total ops  $+ %::value $+ 
}
alias thetheme.serv.unc {
  %:echo 03 [server]:01 unknown connections  $+ %::value $+ 
}
alias thetheme.serv.chanform {
  %:echo 03 [server]:01 channels  $+ %::value $+ 
}
alias thetheme.serv.local {
  %:echo 03 [server]:01 local clients  $+ %::users $+ 
}
alias thetheme.serv.localusers {
  %:echo 03 [server]:01 local users  $+ %::users $+ / $+ %::max $+ 
}
alias thetheme.serv.global {
  %:echo 03 [server]:01 gloabal users  $+ %::users $+ / $+ %::value $+ 
}
alias thetheme.serv.userhost {
  %:echo 03 [server]:01 gloabal uses  $+ %::nick $+  [ $+ %::address $+ ]
}

alias thetheme.misc.host {
  %:echo 03 %::nick %::nick
}
alias thetheme.loaded {
  %:echo 03 [thetheme]:01 standard loaded
  %:echo 03 [thetheme]:01 version 1.0
  %:echo 03 [thetheme]:01 created by zach
  %:echo 03 [thetheme]:01 url http://tt.zpws.net
  %:echo 03 [thetheme]:01 email zach@zpws.net
}
alias thetheme.unloaded {
  %:echo 03 [thetheme]:01 standard unloaded
  %:echo 03 [thetheme]:01 version 1.0
  %:echo 03 [thetheme]:01 created by zach
  %:echo 03 [thetheme]:01 url http://tt.zpws.net
  %:echo 03 [thetheme]:01 email zach@zpws.net
}

alias thetheme.action.chan {
  %:echo 03 [action]נננננ01  $+ %::nick $+  %::text
}
alias thetheme.action.chanself {
  %:echo 03 [action]נננננ01  $+ %::me $+  %::text
}
alias thetheme.action.query {
  %:echo 03 [action]נננננ01  $+ %::nick $+  %::text
}
alias thetheme.action.queryself {
  %:echo 03 [action]נננננ01  $+ %::me $+  %::text
}
alias thetheme.away.away {
  %:echo 03 [away]נננננ01  You're Now Away 
}
alias thetheme.away.back {
  %:echo 03 [away]נננננ01  You're Now Back 
}
alias thetheme.chan.toomany {
  %:echo 03 [error]:01 %::chan cannot be accessed due to the fact that you are in too many channels.
}
alias thetheme.whowas.nonick {
  %:echo 03 [error]:01 cannot preform whowas on  %::nick because there was no such nick.
}
alias thetheme.serv.banned {
  %:echo 03 [servererror]:01 cannot join  %::server because you were banned from it.
}
alias thetheme.moreperms {
  %:echo 03 [error]:01 you need more parameters for  %::text 
}
alias thetheme.chan.toomany {
  %:echo 03 [error]:01 %::chan cannot be accessed due to the fact that you are in too many channels.
}
alias thetheme.banlist.full {
  %:echo 03 [error]:01 banlist is full.
}
alias thetheme.motd.body {
  %:echo 03 %::text
}
alias thetheme.motd.strt {
  %:echo 03 start of message of the day 
}
alias thetheme.motd.end {
  %:echo 03 end of message of the day 
}
alias thetheme.nick.col {
  %:echo 03 there has been a collision with  $+ %::nick $+ 
}
alias thetheme.silent {
  %:echo 03 [error]:01 your silentlist is full
}
alias thetheme.chan.unk.mode {
  %:echo 03 [error]:01  $+ %::chan $+  cannot be accesed due to the fact there is an unknown mode
}
alias thetheme.chan.ircop {
  %:echo 03 [error]:01  $+ %::chan $+  cannot be accesed due to the fact that you arn't an IRCop
}
alias thetheme.chan.reg {
  %:echo 03 [error]:01  $+ %::chan $+  cannot be accesed due to the fact that you don't have a registered name (mode: +R)
}
alias thetheme.chan.reg {
  %:echo 03 [error]:01 you cannot go to  $+ %::chan $+  because you are already in it.
}
alias thetheme.chan.reg {
  %:echo 03 [error]:01 No Text to send
}
alias thetheme.nick.ban.change {
  %:echo 03 [error]:01 Cannot change Nick while banned
}
alias thetheme.already.reg {
  %:echo 03 [error]:01 You have already registered
}
alias thetheme.incor.pass {
  %:echo 03 [error]:01 Incorrect Password
}
alias thetheme.nokill {
  %:echo 03 [error]:01 Cannot kill the server
}
alias thetheme.endusers {
  %:echo 01 end of users...
}
