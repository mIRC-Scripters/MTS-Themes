alias _onload {
  %:echo 02»»» Default theme for IRCR loaded 
}

alias _whois.start {
  %:echo 10 »»» 02Whois10  ««« 
  %:echo  02 %::nick 10 ( $+ %::address $+ )
  %:echo 02 Realname is: 10 * %::realname
}

alias _whois.idle { echo -a 2 Idle:10 %::idletime  signon %::signontime }
