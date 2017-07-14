alias aerials.whois {
  %:echo 13╔═══════════════════════════════════════════════════════
  %:echo 13║12 %::nick is < $+ %::address $+ >
  %:echo 13╠12═══════════════════════════════════════════════════════
  %:echo 13║12 Realname:13 %::realname                           
  %:echo 13║12 Channels:13 %::chan                               
  if (%::idletime) %:echo 13║12 Idle:13 %::idletime  
  if (%::away) %:echo 13║12 Away:13 %::away                      
  %:echo 13║12 End of whois on %::nick                            
  %:echo 13╚═══════════════════════════════════════════════════════
}
