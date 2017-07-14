[mts]
Name Ferrari
Author CyberB0y
Email cesspit_31@hotmail.com
Website Do not have website currently
Description Red Ferrari Theme.. Graphics from Emmanuel Santos.. Have a lot of headache seeing red!
Version 1.8
MTSVersion 1.1
Script rferrari.mrc
 
Timestamp ON
TimestampFormat <c4>[<c2> HH:nn:ss <c4>]
 
BaseColors 00,04,14,15
Colors 1,06,04,14,00,00,03,03,03,03,04,00,14,07,06,00,03,00,03,14,00,01,04,1,00,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 91,173,246 7,123,228 177,217,252 128,128,128 208,208,208
 
FontDefault Tahoma,11,B
FontQuery Tahoma,11,B
FontChan Tahoma,11,B
 
CLineOwner 00
CLineOP 04
CLineHOP 15
CLineVoice 14
CLineRegular 00
CLineMe 04
CLineFriend 14
CLineEnemy 08
 
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
 
Prefix 4:8:0:
ParenText 14(15<text>14)
 
TextChan 15<cmode>14<nick>:15 <text>
TextChanSelf 15<cmode>4<me>:15 <text>
ActionChan <pre> 8Action:3 *<nick> <text>
ActionChanSelf <pre> 8Action:3 *<me> <text>
NoticeChan 8Notice14(15from <chan>0(15<address>0)14)15 <text>
Notice 8Notice14(15from <nick>0(15<address>0)14)15 <text>
NoticeSelf <pre> 8Notice14(15to <nick>14)15 <text>
NoticeSelfChan <pre> 8Notice14(15to <chan>14)15 <text>
TextQuery 14<nick>:15 <text>
TextQuerySelf 0<me>:15 <text>
ActionQuery <pre> 8Action:3 *<nick> <text>
ActionQuerySelf <pre> 8Action:3 *<me> <text>
TextMsg 4Msg14(15to <nick>0(15<address>0)14)15 <text>
TextMsg 4Msg14(15to <nick>0(15<address>0)14)15 <text>
 
Mode <pre> 8Mode:15 <nick> sets 14(15<modes>14)
ModeUser <pre> 8Usermode:15 <nick> sets 14(15<modes>14)
Join <pre> 8Joins:15 <nick> 14(15<address>14)
JoinSelf <pre> 15You have joined14 <chan>
Part <pre> 8Parts:15 <nick> 14(15<address>14) <parentext>
Kick <pre> 4Kick: 15<knick> was kicked by <nick> <parentext>
KickSelf <pre> 4Kicked:15 You were kicked from <chan>, by <nick> <parentext>
Quit <pre> 8Quit:15 <nick> 14(15<address>14) <parentext>
Topic <pre> 8Topic:15 <nick> sets new topic:3 <text>
Nick <pre> 8Nick:15 <nick> changed to <newnick>
NickSelf <pre> 8Nick:15 <nick> changed to <newnick>
Invite <pre> 4Invite:15 <nick> invited you to join <chan>
ServerError <pre> 4Error:15 <text>
Rejoin <pre> <nick> has rejoined14 <chan>
CTCP <pre> 8CTCP14(15<nick>14)15 <ctcp> <text>
CTCPChan <pre> 8CTCP14(15<nick>0@15<chan>14)15 <ctcp> <text>
CTCPSelf <pre> 8CTCP14(15<nick>14)15 <ctcp> <text>
CTCPChanSelf <pre> 8CTCP14(15<nick>0@15<chan>14)15 <ctcp> <text>
CTCPReply <pre> 8CTCP14(15<nick>14)15 <ctcp> reply <text>
Notify <pre> 8Notify:15 <nick> is on IRC <parentext>
UNotify <pre> 8Unotify:15 <nick> as left IRC <parentext>
 
Echo <pre> 0<text>
EchoTarget <pre> 14(15<target>14)15 <text>
Error <pre> 0<text>
Load <pre> 4F0errari 4T0heme 4L0oaded 15...
Unload <pre> 4F0errari 4T0heme 4U0nloaded 15...
 
RAW.311 !script f.init %::nick %::address %::realname 
RAW.319 !script f.chan %::chan
RAW.312 !script f.server %::wserver
RAW.317 !script f.idle %::idletime %::signontime
RAW.301 !script f.away %::text
RAW.318 !script f.end 
 
Whowas <pre> 0Whowas:15 <nick> 14(15<address>14)15 14»»15 <realname>
 
RAW.Other <pre> 0<text>
RAW.302 <pre> 0Userhost:15 <nick> 14(15<address>14)
RAW.315 <pre> 0End of 15/who0 list for <chan>
RAW.324 <pre> 4<chan> Modes:15 <modes>
RAW.332 <pre> 0Topic of the Day:3 <text>
RAW.333 <pre> 0Set by:15 <nick> 0on15 <text>
RAW.353 <pre> 3<chan>:15 <text>
RAW.366 <pre> 0End of 15/names0 list for <chan>
RAW.372 0<text>
RAW.375 <pre> 0Message of the day:
RAW.376 0End of 15/motd0 command
RAW.391 <pre> 0Date:15 <value>
RAW.391 <pre> 0Date:15 <value>
RAW.329 !script haltdef
 
RAW.401 <pre> 0No such nickname15 <nick>
RAW.403 <pre> 0No such channel15 <chan>
RAW.404 <pre> 0Unable to send message to15 <chan>
RAW.421 <pre> 0Invalid command:15 <value>
RAW.433 <pre> 15<nick>0 is already in use.
RAW.471 <pre> 0Can't join <chan>, its full 14(15+l14)
RAW.473 <pre> 0Can't join <chan>, its invite only 14(15+i14)
RAW.474 <pre> 0Can't join <chan>, you're banned 14(15+b14)
RAW.475 <pre> 0Can't join <chan>, requires key 14(15+k14)
RAW.482 <pre> 0You're not operator on 15<chan>
RAW.475 <pre> 0Can't join <chan>, requires key 14(15+k14)
RAW.473 <pre> 0Can't join <chan>, its invite only 14(15+i14)
RAW.471 <pre> 0Can't join <chan>, its full 14(15+l14)
 
ImageButtons ferrared.bmp
ImageSwitchbar Fill ferrariback.bmp
ImageToolbar Fill Ferrari.bmp
ImageMirc Tile ferrarif.bmp
 
