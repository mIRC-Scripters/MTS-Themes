alias stheme.whois1 { 
  %:echo 1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=4[1/whois %::nick $+ 4]1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=
  %:echo %::pre Name1:1 %::realname                
}
alias stheme.whois7 {
  %:echo 1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=4[1/whois %::nick $+ 4]1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=1=4=
}
alias stheme.whois2 {
  %:echo %::pre Idle1:1 $duration(%::idletime)
  %:echo %::pre Signon1:1 %::signontime
}
alias stheme.whois3 {
  %:echo %::pre Server1:1 $+(%::wserver,4/01,%::serverinfo)
}
alias stheme.whois4 {
  %:echo %::pre Chan1:1 %::chan
}
alias stheme.whois5 {
  %:echo %::pre Away1:1 %::text
}
alias stheme.whois6 {
  %:ech %::pre IRCOp1:1  %::operline
}
