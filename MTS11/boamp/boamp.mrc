alias boamp.whois {
  %:echo 12••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  %:echo 12• 4Whois on8 %::nick (04 $+ %::address $+ 8)
  %:echo 12• 4Real name:8 %::realname
  %:echo 12• 4Channels:8 %::chan
  if (%::idletime) %:echo 12• 4Idle: $duration(%::idletime)
  if (%::text) %:echo 12• 4Away: %::text
  %:echo 12••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
}
