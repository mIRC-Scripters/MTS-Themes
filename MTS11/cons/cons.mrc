
alias cons.whois {
  %:echo %::pre Whois information for  $+ %::nick $+  ( $+ %::address $+ )
  %:echo %::pre realname:  $+ %::realname $+ 
  %:echo %::pre server:  $+ %::wserver $+ 
  %:echo %::pre channels:  $+ %::chan $+ 
  if (%::isregd) {
    %:echo %::pre registered: yes
  }
  else {
    %:echo %::pre registered: no
  }
  if (%::isoper == is) {
    %:echo %::pre status:  $+ %::operline $+ 
  }
  if (%::away) {
    %:echo %::pre away:  $+ %::away $+ 
  }
  if (%::idletime) {
    %:echo %::pre idletime:  $+ $duration(%::idletime) $+ 
    %:echo %::pre signed on:  $+ %::signontime $+ 
  }
}
