alias spIRC.user {
 %:echo 1Whois_______________
  %:echo 1Nickname:15 %::nick 
  %:echo 1Hostname:15 %::address 
  %:echo 1Fullname:15 %::realname 
}
alias spIRC.away { %:echo 1Away:15 %::text }
alias spIRC.chans { %:echo 1Chans:15 %::chan }
alias spIRC.server { %:echo 1Server:15%::server }
alias spIRC.idle { %:echo 1Idle:15 $duration($1) }
