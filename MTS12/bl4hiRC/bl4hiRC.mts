[mts]
;INFO THEME
Name bl4hiRC
Author CaR[T]MaN
Email carttman@hotmail.com
Description A blue theme made for my script.
Website http://www.freewebz.com/bl4hirc
Version 1.2
MTSVersion 1.2
Timestamp OFF
Load !Script load
Unload 11• B9l4hiRC T9heme U9nlo@ded.
Script bl4hiRc.mrc

;FORMAT TXT
BaseColors 8,7,5,3,3,15,0,0,0,0,0,0,7,3,7,0,0,7,3,5,5,9,15,9,3,1
RGBcolors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 255,128,64 255,255,0 0,252,0 27,120,235 71,187,220 0,0,255 255,0,255 127,127,127 210,210,210
Colors 10,11,11,0,0,15,0,9,11,8,15,0,0,0,0,0,9,11,8,0,15,10,15,10,0,2
ImageStatus tile st.bmp
ImageChan tile st.bmp
ImageQuery tile st.bmp
ImageButtons buttons.bmp
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
CLineOwner 9
CLineOP 9
CLineHOP 9
CLineVoice 15
CLineRegular 0
CLineMe 15
CLineFriend 0
CLineEnemy 0
CLineIrcOP 11
Prefix 15•14•1•
ParenText ((text))
Timestamp on
TimestampFormat 11(00HH:nn11)

;EVENTS
TextChan <timestamp>  9<cmode> <nick> :  <text>
TextChanself <timestamp>  9<cmode> <nick> :  <text>
ActionQuery  <timestamp> • <nick> <text>
ActionQuerySelf  <timestamp> • <me> <text>
ActionChan  9º <cmode><nick> : <text>
ActionChanself  9º <cmode><nick> : <text>
TextMsg  <timestamp>  9<cmode> <nick> :  <text>
TextMsgSelf  <timestamp>  9<cmode> <nick> :  <text>
Notice 9º Notice «<nick>»  : <text>
NoticeChan  9º <chan> Notice  <cmode><nick> : <text>
NoticeSelf   9º Notice «<nick>» : <text>
NoticeSelfChan 9º <chan> Notice <text>
Mode  <timestamp>  11• Mode <nick> sets mode[s] : <modes>
ModeUser !Script %:echo 11•0 Mode : %::modes  . Usermodes : $usermode
TextQuery  <timestamp> «<nick>» : <text>
TextQuerySelf  <timestamp> «<me>» : <text>

;OTHERS EVENTS
Join  <timestamp>  11• Joins <nick>  (<address>)
JoinSelf  <timestamp>  11• 0Now Talking : <chan>
Rejoin <timestamp>  11• Try again rejoin <chan>
Part  <timestamp>  11• Parts <nick>  (<address>)
Quit  <timestamp>  11• Quits <nick> (<address>) reason : <text>
Kick  <timestamp>  11• Kick <knick> was kicked off by <nick> from <chan> - Reason : <text>
KickSelf  <timestamp>  11• You have been kicked from <chan> by <nick> - Reason : <text>
Nick <timestamp>  11• Nick <nick> is now known as <newnick>
NickSelf <timestamp>  11• Your nick is now <newnick>
Invite  <timestamp>  11• <nick> invites you to : <chan>
ServerError <timestamp> 9º Server error : <text>
Topic  <timestamp>  11• Topic changes by <nick> to : <text>
Wallop  11• 0Wallop <text>
Ctcp  <timestamp>  11• Ctcp <ctcp> from <nick> <text>
CtcpSelf <timestamp>  11• Ctcp <ctcp> to <nick> <text>
CtcpChan  <timestamp>  11• Ctcp <ctcp> <chan> from <nick> <text>
CtcpChanSelf <timestamp>  11• Ctcp <ctcp> <chan>
CtcpReply <timestamp>  11• Ctcp Reply <ctcp> <nick> <text>
CtcpReplySelf <timestamp>  11• Ctcp Reply <ctcp> <nick> <text>
NoticeServer !Script return
Notify <timestamp>  11• Notify : <nick> is now online
UNotify <timestamp>  11• Unotify : <nick> is now offline
DNS 11• DNS Resolving <address>
DNSError 11• Error DNS . Couldn't resolve <address>
DNSResolve 11• DNS Resolved <naddress> (<iaddress>) to : <raddress>

;RAWS
;0 - 100
Raw.001 11• 0Welcome to iRC <server>
Raw.002 !Script %:echo 11• 0Version : %::value
Raw.003 !Script %:echo 11• 0Created %::value
Raw.004 !Script null
Raw.005 !Script null
Raw.006 !Script null
;200 - 300
Raw.249 !Script null
Raw.250 !Script null
Raw.251 !Script %:echo 11• 0Lusers : %::value user(s) on %::value server(s)
Raw.252 !Script null
Raw.253 !Script null
Raw.254 !Script null
Raw.255 !Script null
Raw.256 !Script null
Raw.257 !Script null
Raw.258 !Script null
Raw.259 !Script null
Raw.265 !Script null
Raw.266 !Script null
;300 - 400
Raw.301 11•0 Away : <text>.
Raw.305 11•0 No longer marked as being away
Raw.306 11•0 You are now marked as away
Raw.307 !Script %:echo 11•0 %::nick is a registered nick
Raw.311 !Script raw311 
Raw.312 !Script %:echo 11•0 Server info :  %::wserver  : %::serverinfo .
Raw.313 11•0 iRC Operator :  yes .
Raw.314  11•0 Whowas <nick> (<address>) : <realname>.
Raw.315 !Script null
Raw.317 !Script %:echo 11•0 Idle : $duration(%::idletime) . Connected : %::signontime .
Raw.318  11•0 End of <nick>´s whois .
Raw.319 11•0 Channels : <chan> .
Raw.324 !Script null
Raw.329 !Script null
Raw.331 !Script null
Raw.332 <timestamp> 11•0 Topic <chan> : <text> 
Raw.333 <timestamp> 11•0 Topic <chan> set by <nick> ( <text> )
Raw.334 !Script null
Raw.335 !Script null
Raw.336 !Script null
Raw.341 <timestamp> 11•0 You has invited <nick> to <chan> .
Raw.352 !Script null
Raw.353 !Script null
Raw.366 !Script null
Raw.369 !Script null
Raw.372 !Script null
Raw.375 !Script null
Raw.376 !Script null
Raw.378 !Script null
Raw.379 !Script null
Raw.382 11•0  Rehashing Server
Raw.391 !Script null
;400-500
Raw.401 11•0 <nick> isn´t on iRC .
Raw.403 11•0  Channel <chan> doesn't exist .
Raw.404 11•0  You can´t send text to <chan> .
Raw.405 11•0  Cannot join to <chan>. You're on too many chans.
Raw.416 11•0  Too many lines in the output
Raw.421 !Script %:echo 11•0  Error - Unknown command / $+ %::text
Raw.422 !Script null
Raw.431 11•0  No nickname given
Raw.433 <timestamp>  11•0  Nick <nick> is being used . Type /nick «othernick» for change it!
Raw.436 !Script %:echo 11•0  Nickname collision with : %::nick
Raw.437 11•0  Cannot change nickname while banned on channel.
Raw.438 11•0  Nickname changed too fast, please wait a while and try again
Raw.439 11•0  Target changed too fast, please wait a while and try again
Raw.441 11•0  Nick <nick> isn´t on <chan>
Raw.442 11•0  You aren`t on <chan>
Raw.443 11•0  Nick <nick> is already on <chan>
Raw.451 11•0  Register first
Raw.455 11•0  Your username ident  contained the invalid character(s) chars  and has been changed to new . Please use only the characters 0-9 a-z A-Z _ - or . in your username. Your username is the part before the @ in your email address.
Raw.461 11• More parameters needed for : <text>
Raw.462 11•0  You may not register
Raw.465 11• Sorry,  Y ou're  b anned  f rom  t his  s erver.
Raw.467 11•0  Channel key already set
Raw.471 11• Channel <chan> is full [+l]
Raw.472 11• Is unknown mode char to me
Raw.473 11• Channel <chan> is an invite only [+i]
Raw.474 11• You are banned from <chan> [+b]
Raw.475 11• Channel <chan> is locked. You need correct key [+k]
Raw.477 11• You need a registered nick to join that channel
Raw.478 11• Channel ban/ignore list is full
Raw.481 11• Permission Denied- You're not an iRC operator
Raw.482 <timestamp> 11• You haven´t op[@] for do it(s) on <chan>!
Raw.483 11• You cant kill a server!
Raw.484 11• Cannot kill, kick or deop channel service
Raw.491 11• No O-lines for your host
;500
Raw.501 11• Unknown MODE flag
Raw.502 11• Cant change mode for other users
Raw.511 11• You're /silence list is full.
Raw.512 11• No such gline
Raw.512 11• Authorization required to use Registered Nickname nick 
Raw.513 11• If you can't connect, type /QUOTE PONG code  or /PONG code
