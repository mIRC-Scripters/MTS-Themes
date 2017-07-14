alias whois_start {
  %:echo 7××××××××× 9[3Whois on3 %::nick 9] 7××××××××× 
  %:echo 7× 3Address:7 %::address 
  %:echo 7× 3Real Name:7 %::realname 
}

alias idle_start {
  %:echo 7× 3Idle:7 $duration(%::idletime)
}
