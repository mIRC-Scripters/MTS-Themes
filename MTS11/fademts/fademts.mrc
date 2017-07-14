alias fade.chantext {
  %:echo 12(0 $+ %::cmode $+ 2:0 $+ %::nick $+ 12)15 %::text
}
alias fade.actionchan {
  %:echo 11!12!2!0 * %::nick %::text
}
alias fade.tcs {
  %:echo 12(0 $+ %::cmode $+ 2:0 $+ %::me $+ 12)15 %::text
}
alias fade.acs {
  %:echo 11!12!2!0 * %::me %::text
}
alias fade.notice {
  %:echo 12[0 $+ %::nick $+ 12]15 %::text 12(0notice12)
}
alias fade.ns {
  %:echo 12[0 $+ %::me $+ 12]15 %::text 12(0notice12)
}
alias fade.tq {
  %:echo 12(0 $+ %::cmode $+ 2:0 $+ %::nick $+ 12)15 %::text
}
alias fade.tqs {
  %:echo 12(0 $+ %::cmode $+ 2:0 $+ %::me $+ 12)15 %::text
}
alias fade.aq {
  %:echo 11!12!2!0 * %::nick %::text 
}
alias fade.aqs {
  %:echo 11!12!2!0 * %::me %::text
}
alias fade.mode {
  %:echo %::pre 12(0 $+ %::nick $+ 12) sets mode: 12(0 $+ %::modes $+ 12)
}
alias fade.modeu {
  %:echo %::pre 12(0 $+ %::nick $+ 12) sets mode: 12(0 $+ %::modes $+ 12)
}
alias fade.kick {
  %:echo %::pre 12(0 $+ %::nick $+ 12) has kicked 12(0 $+ %::knick $+ 12) (0 $+ %::parentext $+ 12)
}
alias fade.part {
  %:echo %::pre 12(0 $+ %::nick $+ 12) has parted 12(0 $+ %::chan $+ 12)
}
alias fade.join {
  %:echo %::pre 12(0 $+ %::nick $+ 12) has joined 12(0 $+ %::chan $+ 12)
}
alias fade.topic {
  %:echo %::pre 12(0 $+ %::nick $+ 12) sets topic: 12(0 $+ %::text $+ 12)
}
alias fade.nick {
  %:echo %::pre 12(0 $+ %::nick $+ 12) is now known as 12(0 $+ %::newnick $+ 12)
}
alias fade.invite {
  %:echo %::pre 12(0 $+ %::nick $+ 12) has invited you to: 12(0 $+ %::text $+ 12)
}
alias fade.rejoin {
  %:echo %::pre Rejoining: 12(0 $+ %::chan 12)
}
alias fade.ctcp {
  %:echo %::Pre  11:12:2:CTCP2:12:11: from 12{0 $+ %::nick $+ 12} it is 12(0 $+ %::ctcp $+ 12)
}
alias fade.ctcpchan {
  %:echo %::pre  11:12:2:CTCP-Chan2:12:11: from 12(0 $+ %::nick $+ 12) it is 12(0 $+ %::ctcp $+ 12)
}
alias fade.ctcpme {
  %:echo %::pre  11:12:2:CTCP-Me2:12:11: from 12(0 $+ %::nick $+ 12) it is 12(0 $+ %::ctcp $+ 12)
}
alias fade.ctcpr {
  %:echo %::Pre  11:12:2:CTCP2:12:11: 12(0 $+ CTCPReply from2 %::nick $+ 12) (0 $+ 2>12>0> %::text $+ 12)
}
alias fade.ctcprs {
  %:echo %::Pre  11:12:2:CTCP2:12:11: 12(0 $+ CTCPReply from0 %::me $+ 12) (0 $+ 2>12>0> %::text $+ 12)
}
alias fade.nserv {
  %:echo 12[0 $+ %::nick $+ 12]15 %::text 12(0servernotice12)
}
alias raw.311 {
  %:echo 0_______________________________________________________________________________________________________
  %:echo 0?12?2? 12(0Whois: Start12) (0 $+ %::nick $+ 12) (0 $+ %::address 12:0 %::realname $+ 12)
}
alias raw.319 {
  %:echo 0?12?2? 12(0chan12) %::chan
}
alias raw.312 {
  %:echo 0?12?2? 12(0serv12) %::wserver
}
alias raw.301 {
  %:echo 0?12?2? 12(0away12) %::text
}
alias raw.307 {
  %:echo 0?12?2? 12(0nick12) %::isregd
}
alias raw.313 {
  %:echo 0?12?2? 12(0irc@12) %::isoper 0: %::operline
}
alias raw.317 {
  %:echo 0?12?2? 12(0time12) 0Signon: %::signontime 0Idle: %::idletime
}
alias raw.318 {
  %:echo 0?12?2? 12(0Whois: End12) (0 $+ %::nick $+ 12)
  %:echo 0_______________________________________________________________________________________________________
}
alias raw.002 {
  %:echo 12(0server12) (0 $+ %::server 12:0 %::value $+ 12)
}
alias raw.003 {
  %:echo 12(0server creation12) (0 $+ %::value $+ 12)
}
alias raw.005 {
  %:echo 12(0supported protocol12) (0 $+ %::text $+ 12)
}
alias raw.221 {
  %:echo 12(0usermodes12) (0 $+ %::nick 12:0 %::modes $+ 12)
}
alias raw.250 {
  %:echo 12(0connections12) (0 $+ %::value $+ 12)
}
alias raw.251 {
  %:echo 12(0users12) (0 $+ %::users 12:0 %::text 12:0 %::value $+ 12)
}
alias raw.252 {
  %:echo 12(0operators12) (0 $+ %::value $+ 12)
}
alias raw.253  {
  %:echo 12(0unknown connections12) (0 $+ %::value $+ 12)
}
alias raw.254 {
  %:echo 12(0channels12) (0 $+ %::value $+ 12)
}
alias raw.255 {
  %:echo 12(0local clients12) (0 $+ %::users 12:0 %::value $+ 12)
}
alias raw.265 {
  %:echo 12(0local users12) (0 $+ %::users 12:0 %::value $+ 12)
}
alias raw.266 {
  %:echo 12(0global users12) (0 $+ %::users 12:0 %::value $+ 12)
}
alias raw.302 {
  %:echo 12(0userhost12) (0 $+ %::nick 12:0 %::address 12:0 %::value $+ 12)
}
alias raw.324 {
  %:echo 12(0channel modes12) (0 $+ %::chan 12:0 %::modes $+ 12)
}
alias raw.332 {
  %:echo 12(0channel topic12) (0 $+ %::chan 12:0 %::text $+ 12)
}
alias raw.333 {
  %:echo 12(0topic set by12) (0 $+ %::nick 12:0 %::chan 12:0 %::text $+ 12)
}
alias raw.353 {
  %:echo 12(0names12) (0 $+ %::chan 12:0 %::text $+ 12)
}
alias raw.366 {
  %:echo 12(0done names12) (0 $+ %::chan $+ 12)
}
alias raw.372 {
  %:echo 12(0motd12) (0 $+ %::text $+ 12)
}
alias raw.375 {
  %:echo 12(0motd begin12)
}
alias raw.376 {
  %:echo 12(0motd end12)
}
alias raw.391 {
  %:echo 12(0time/date12) (0 $+ %::text $+ 12)
}
alias raw.401 {
  %:echo 12(0no such nick12) (0 $+ %::nick $+ 12)
}
alias raw.403 {
  %:echo 12(0no such chan12) (0 $+ %::chan $+ 12)
}
alias raw.404 {
  %:echo 12(0not able to send message12) (0 $+ %::chan $+ 12)
}
alias raw.421 {
  %:echo 12(0invalid command12) (0 $+ %::value $+ 12)
}
alias raw.433 {
  %:echo 12(0nick in use12) (0 $+ %::nick $+ 12)
}
alias raw.471 {
  %:echo 12(0full chan12) (0 $+ %::chan $+ 12)
}
alias raw.473 {
  %:echo 12(0invite only12) (0 $+ %::chan $+ 12)
}
alias raw.474 {
  %:echo 12(0banned12) (0 $+ %::chan $+ 12)
}
alias raw.475 {
  %:echo 12(0key needed12) (0 $+ %::chan $+ 12)
}
alias raw.482 {
  %:echo 12(0not opped12) (0 $+ %::chan $+ 12)
}
