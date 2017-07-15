
alias thetheme.mode.mode {
  %:echo 03 $+ %::nick $+ 01 changes modes to: 03 $+ %::modes
}
alias thetheme.mode.me {
  %:echo 03 $+ %::me $+ 01 changes modes to: 03 $+ %::modes
}

alias thetheme.textquery {
  %:echo 03 $+ %::lt $+ 09 $+ %::cmode $+ 01 $+ %::nick $+ :01 %::text
}
alias thetheme.textqueryself {
  %:echo 03 $+ %::lt $+ 09 $+ %::cmode $+ 01 $+ %::me $+ --[ 01 %::text 
}

alias thetheme.textchanself {
  %:echo 03 %::lt 09 %::cmode 01 %::me >01 %::text
}
alias thetheme.whois { 
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ start of whois: %::nick 09< $+ %::address $+ 09> þþ                 
  %:echo 03รฤฤฤฤฤฤฤฤ03ฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฟÿÿÿÿ
  %:echo 03ณ 01name09: %::realname                                    
  %:echo 03ณ 01the nick %::nick $+ :  $+ %::isregd $+  registered                
  if (%::chan) { 
  %:echo 03ณ 01channels09: $replace(%::chan,@#,4@#,+#,4+#)                
  }
  %:echo 03ณ 01 $+ %::nick $+ 09: %::isoper $+ 09 an ircop    
  %:echo 03ณ 01server09: %::wserver                                        
  if (%::away) {
  %:echo 03ณ 01away09: %::away                                            
  }
  if (%::idletime) {
  %:echo 03ณ 01idle09: %::idletime                                       
  %:echo 03ณ 01signed on09: %::signontime                                   
  }
  %:echo 03รฤฤฤฤฤฤฤฤ03ฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤูÿÿÿÿ           
  %:echo 03ณ þþ end of whois: %::nick 09< $+ %::address $+ 09> þþ                              
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.topic.set {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ THE TOPIC OF %::chan IS NOW þþ              
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 %::text                           
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ THE TOPIC OF %::chan IS NOW SET þþ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.topic.current {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ Settings of %::chan is þþ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 %::text                           
  %:echo 03
}
alias thetheme.raw329 {
  %:echo 01channel created03: 01 $asctime( %::text ,dddd mmm dd yyyy HH:nn:ss) 
}
alias thetheme.chan.modes {
  %:echo 03 01 Channel Modes: %::modes
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF SETTINGS of %::chan þþ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.topicset {
  %:echo 03 01 Topic Set on03 $+ %::value $+ 01 by03 %::nick  
}
alias thetheme.nick.not {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 The Nick:  %::nick  01does not exist                           
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                                
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.nick.inuse {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 The nick: 03 %::nick 01 is already in use                         
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.nick.invalid {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 The Nick: 03 %::nick 01 is not valid!                           
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}

alias thetheme.chan.not {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                   
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 The Channel:  %::chan  01doesn't exist                           
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.mod {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 Could not send text to  %::chan  01 because it is +m (moderated)                           
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.full {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 The Channel: 03 %::chan 01 is full. Please try again later                          
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.inv {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 You could not access the channel: 03 %::chan 01 because it is invite only!                         
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.error {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  if ( $+ %::text $+ ) {
  %:echo 03 01 %::text
  }
  else {
  %:echo 03 01 An unknown error has occured
  }                 
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.banned {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 You could not access the channel: 03 %::chan 01 because you are banned from it.                   
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.key {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 You could not access the channel: 03 %::chan 01 because you need a key.
  %:echo 03 To do this type in 01 /join %::chan KEY 
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.chan.op {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 You could not access the channel: 03 %::chan 01 because you are not an op (@)              
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}

alias thetheme.cmd.invalid {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 Here is the error of your text: 03 %::value 01            
  %:echo 03                                         %::text
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.dns.error {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF ERROR þþ 00 -----------------------------------------------บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 Can't look up 03 %::address         
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF ERROR þþ 00 -------------------------------------------------บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}

alias thetheme.notice.chan {
  if ( $+ %::nick == %::target $+ ) {
    %:echo 01  $+ %::me $+  notifies  $+ %::target $+ : 03 %::text 
  }
  else { 
    %:echo 01  $+ %::nick $+  notifies  $+ %::target $+ : 03 %::text 
  }
}
alias thetheme.notice.notice {
  %:echo 01 %::me notifies %::target -> 03 %::text
}
alias thetheme.notice.self {
  %:echo 03 notice self : -> 01 $+ %::target $+ 03 -> %::text
}
alias thetheme.notice.chanself {
  %:echo 03 notice chanself: -> 01 $+ %::target $+ 03 -> %::text
}

alias thetheme.msg.quit {
  %:echo 03 quited: 01 %::nick ( %::address )
  if ( $+ %::parentext == %::null $+ ) { 
  %:echo 03 reason: 01 No Reason 
  }
  else { 
  %:echo 03 reason: 01 %::parentext 
  }
}
alias thetheme.msg.invite {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ INVATATION þþ ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03
  %:echo 03 01 $+ %::nick $+ 03 has invited you to: 01 $+ %::chan            
  %:echo 03
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF INVATATION þþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}
alias thetheme.msg.youinvite {
  %:echo 03 invitation: 01 You invited %::nick < $+ %::address $+ > to %::chan 
  }
alias thetheme.msg.join {
  %:echo 03 joined: 01 %::nick ( %::address ) }
alias thetheme.msg.kick {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ KICKED þþ 00 ---------------------------------------------------03 บ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03 01 You were kicked from %::chan by %::nick
  %:echo 03 01 %::parentext ฤฤฤฤฤฤ %::address
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤทÿÿÿÿ           
  %:echo 03ณ þþ END OF KICKED þþ 00 --------------------------------------------03 บ                             
  %:echo 03ิออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออผ
}

alias thetheme.msg.dns {
  %:echo 03 domain name server: 01 loocking up ( %::address ) บ
}
alias thetheme.msg.kicked {
  %:echo 03 kicked notice: 01 %::knick was kicked from %chan by %::nick < $+ %::address $+ > บ
  if ( $+ %::parentext == %::null $+ ) { 
  %:echo 03 reason: 01 No Reason 
  }
  else { 
  %:echo 03 reason: 01 %::parentext
  }
}
alias thetheme.msg.dns.re {
  %:echo 03 domain name server: 01 resolved ( %::address / %::raddress ) บ
}
alias thetheme.notice.server {
  %:echo 03 notice server (snotice): 01 %::nick ออ[ %::text ]ออ บ
}
alias thetheme.wallop {
  %:echo 03 nwallop: 01  %::text บ
}
alias thetheme.unnotify {
  %:echo 03 unnotify notice: 03 %::nick || %::text  บ
}
alias thetheme.notify {
  %:echo 03 notify notice: 03 %::nick || %::text  บ 
}
alias thetheme.ctcp.reply {
  %:echo 03 ctcp reply: 01- %::nick -03 %::ctcp || %::text บ
}
alias thetheme.ctcp.reply.self {
  %:echo 03 ctcp reply: 01- %::nick -03 %::ctcp  บ
}
alias thetheme.ctcp.chan.self {
  %:echo 03 ctcp request: 01- %::chan -03 %::ctcp || %::text บ
}
alias thetheme.ctcp.self {
  %:echo 03 ctcp request: 01- %::nick -03 %::ctcp || %::text บ
}
alias thetheme.ctcp.chan {
  %:echo 03 ctcp request: 01- %::chan -03 %::ctcp from %::nick บ
}
alias thetheme.ctcp.ctcp {
  %:echo 03 ctcp -> 01- %::ctcp -03 %::nick บ
}
alias thetheme.msgse {
  %:echo 03 msg: 01- %::target -03 %::text บ from: %::me
}
alias thetheme.msg {
  %:echo 03 msg: 01- %::target -03 %::text บ from: %::nick
}

alias thetheme.msg.rejoin {
  %:echo 03 rejoining: 01- %::chan -03 บ
}
alias thetheme.msg.chgnick {
  %:echo 03 changing nick: 01- %::me -03 to01 - %::newnick  บ
}
alias thetheme.msg.nickchg {
  %:echo 03 changing nick: 01- %::nick -03 to01 - %::newnick  บ
}

alias thetheme.msg.joinme {
  %:echo 03 you've joined: 01 %::chan 
}
alias thetheme.msg.part {
  %:echo 03 parted: 01 %::nick < $+ %::address $+ > บ
  if ( $+ %::parentext == %::null $+ ) { 
  %:echo 03 reason: 01 No Reason 
  }
  else { 
  %:echo 03 reason: 01 %::parentext
  }
}  

alias thetheme.serv.startup {
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ START OF SEVER MESSAGES þþ ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ ฤ ฤ ฤฤฤ ฤ ฤ ฤฤฤฤฤ
  %:echo 03ณ01 you're on:  %::server 01 running  %::value               
}
alias thetheme.serv.created {
  %:echo 03ณ %::server 01 created on03 %::value
}
alias thetheme.serv.proto {
  %:echo 03ณ 01 Protocols supported %::server 03 
  %:echo 03ณ %::text
}
alias thetheme.serv.modes {
  %:echo 03ณ 01 Current modes on %::server for03 %::nick 01 %::modes
}
alias thetheme.serv.con {
  %:echo 03ณ 01 Total Connections 03 %::nick 
}
alias thetheme.serv.modes {
  %:echo 03ณ 01 Current modes on %::server for03 %::nick 01 %::modes
}
alias thetheme.serv.users {
  %:echo 03ณ 01 Users on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::users
  %:echo 03ณ 01 00 --------------------------- 03 %:: text 01 are invisible 
  %:echo 03ณ 01 Servers 03 ฤ ฤ ฤฤฤ ฤ ฤฤ ฤ ฤฤฤ ฤ ฤ  %::value
}
alias thetheme.serv.ops {
  %:echo 03ณ 01 Ops on %::server :03 %::value
}
alias thetheme.serv.unc {
  %:echo 03ณ 01 Unknown Connections to %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::value
}
alias thetheme.serv.chanform {
  %:echo 03ณ 01 Channels on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::value
}
alias thetheme.serv.local {
  %:echo 03ณ 01 Local Clients on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::users
}
alias thetheme.serv.localusers {
  %:echo 03ณ 01 Local Users on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::users 01 max 03 %::value
}
alias thetheme.serv.global {
  %:echo 03ณ 01 Global Users on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ   %::users 01 max 03 %::value
}
alias thetheme.serv.userhost {
  %:echo 03ณ 01 Global Uses on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::nick ( %::address )
}
alias thetheme.serv.userhost {
  %:echo 03ณ 01 Global Uses on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::nick ( %::address )
}
alias thetheme.serv.userhost {
  %:echo 03ณ 01 Global Uses on %::server 03 ฤ ฤ ฤฤฤ ฤ ฤ  %::nick ( %::address )
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ ฤ ฤ ฤฤฤ ฤ ฤ ฤฤฤฤ        
  %:echo 03ีออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03ณ þþ END   OF SEVER MESSAGES þþ ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ                
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
}
alias thetheme.misc.host {
  %:echo 03 %::nick %::nick
}
alias thetheme.loaded {
  %:echo 03ีอออออออออออออออออออออออออออออออออออออออออออออออออออออออ09อออออออออออออออออป
  %:echo 03รฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฟÿþþ THE THEME þþÿฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤถ
  %:echo 03ณÿASTROÿÿÿÿÿÿฺฤฤฤฤฤฤฤฤฤฤฤฤฤลฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤูÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿบ
  %:echo 03ณÿÿÿ72ÿÿÿÿÿ ฺูÿÿÿÿv1.0.2ÿÿÿภยฤฤฤฤฤฤฤฤฤฤฤฟÿÿÿÿÿÿÿÿÿÿÿl.o.a.d.e.dÿÿÿÿÿÿÿÿÿÿบ
  %:echo 03ณÿÿÿÿÿÿÿÿÿÿÿรฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤูÿÿÿÿÿÿÿÿÿÿÿภฤฤฤฤฤฤฤฤฤฟÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿศอออออออออป
  %:echo 03ณÿÿÿÿÿÿÿÿÿÿÿภฟÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿBy: Zach รฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤยฤฤฤฤฤฤฤฤฤถ
  %:echo 03ณÿÿÿÿÿÿÿฤฤฤฤฤลฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤูÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿภฤฤฤฤฤฤฤฤฤถ
  %:echo 03ณÿÿÿÿÿÿÿÿÿÿÿÿภฟÿÿÿÿÿÿÿÿÿzach@zpws.netÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿtt.zpws.netÿÿÿÿÿÿÿษอออออออออผ
  %:echo 03ภฤฤฤฤฤฤฤฤฤฤฤฤฤมฤฤฤฤฤฤ09ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤะÿ
  %:echo 03 Some Cosmetic errors need to be fixed. but i'm working on other things. just wanted to get this one to the public
}
alias thetheme.unloaded {
    %:echo 03 ฺฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤ THEME NOTICE ฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฤฟ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿThe current theme: The Themeÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿHas been unloaded.ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿI don't know why you did thisÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿ But enjoy your time on mircÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿTHE ENDÿÿÿÿÿÿÿÿÿ ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿณ
    %:echo 03 ณÿÿÿÿÿÿÿÿÿSusccessfully unloaded: The Theme - Astro 72ÿÿÿÿÿÿÿÿÿÿÿÿÿณ
}

