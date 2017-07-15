alias whois_start {
  %:echo 10/¯¯¯¯¯¯¯¯¯\>__________</¯¯¯¯¯¯¯¯¯\ 
  %:echo 10|11Address:14 %::address 
  %:echo 10|11Real Name:14 %::realname 
}

alias idle_start {
  %:echo 10|11Idle:14 $duration(%::idletime)
}

alias idle_start2 {
  %:echo 10|11Idle:0 $duration(%::idletime)
}

alias whois_start2 {
  %:echo 10/¯¯¯¯¯¯¯¯¯\>__________</¯¯¯¯¯¯¯¯¯\ 
  %:echo 10|11Address:0 %::address 
  %:echo 10|11Real Name:0 %::realname 
}

