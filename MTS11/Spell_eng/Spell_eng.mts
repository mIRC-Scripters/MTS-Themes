;----------spell.mts----------Spell Script Default Theme by Spellman (PTnet)-----
[mts]
Name Spell Default MTS
Author Spellman
Email spellscript@hotmail.com
Website www.spell.pt.vu
Description Spell Script default theme. English Version. With 9 Schemes.
Version 1.2
MTSVersion 1.1
SCRIPT spell_eng.mrc
 
Timestamp ON
Timestampformat <c3>[<c2> HH:nn <c3>]

; colors 
BaseColors 11,12,15,00
Colors 10,00,00,13,13,13,12,02,00,12,13,00,12,12,13,15,02,14,12,13,13,10,15,10,13,13,10
RGBColors 255,255,255 0,0,0 147,147,255 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 3,83,154 6,123,230 90,173,248 177,217,252 90,97,115 214,219,247
 
; fonts
FontDefault tahoma,11
FontQuery tahoma,11
FontChan tahoma,11
 
CLineOwner 12
CLineOP 15
CLineHOP 12
CLineVoice 07
CLineRegular 12
CLineMe 13
CLineFriend 02
CLineEnemy 04
CLineIrcOP 12
 
CLineCharOwner 00%
CLineCharOP 00@
CLineCharHOP 00.
CLineCharVoice 00+
CLineCharRegular 00
 
Prefix <c1>-
Parentext <text>
 
TextChan <c3>[<c2><cmode><nick><c3>] <text>
TextChanSelf <c3>[<c2><cmode><me><c3>] <text>
ActionChan <c2>- <nick><c4> <text>
ActionChanSelf <c2>- <me><c4> <text>
NoticeChan <c2>-<nick>(<address>)(<chan>)- <text>
Notice <c2>-<nick>(<address>)- <text>
NoticeSelf <c1>> <c3>Notice <c2>[<c3><nick><c2>]<c4>:<c2>[<c3> <text> <c2>]
NoticeSelfChan <c1>> <c3>Notice <c2>[<c3><nick><c2>:<chan>]<c4>:<c2>[<c3> <text> <c2>]
TextQuery <c3>[<c2><nick><c3>] <text>
TextQuerySelf <c3>[<c2><me><c3>] <text>
ActionQuery <c2>- <nick><c4> <text>
ActionQuerySelf <c2>- <me><c4> <text>
TextMsgSelf <c1>><c3> Msg *<target>* : <text>
 
Mode !script modes %::chan %::nick %::modes
ModeUser <pre><c2> [<c3><me><c2>]<c3> modo:<c3> <modes>
Join <c1>><c3> Join:<c3> <nick> <c2>(<address>)
JoinSelf <c1>>> <c3>Joined <chan>
Part <c1><<c3> Part:<c3> <nick> <c2>(<address>) <c3> <text>
Kick <pre> <c2>[<c3><knick><c2>] <c3>was kicked by <c2>[<c3><nick><c2>]:<c2>[<c3> <text> <c2>]
KickSelf <pre><c3> You were kicked from <c2>[<chan>]<c3> by<c2> [<c3><nick><c2>]<c4>:<c2>[<c3> <text> <c2>]
Quit <c1><<<c2> [<c3><nick><c2>]<c3> has left IRC <c4>:<c2>[<c3> <text> <c2>]
Topic <pre><c3> Topic by <c2><nick><c3> :<c2>[<c3><text><c2>]
Nick <pre><c2> [<c3><nick><c2>]<c3> changes to<c2> [<c3><newnick><c2>]
NickSelf <pre><c3> You're nick is now <c2> [<c3><newnick><c2>]
Invite <pre><c3> <nick> Invite you to join <chan>
ServerError <pre> <c4><text>
Rejoin Attempting to rejoin...
Ctcp <c2>- <c3>CTCP <c1>[<c3><nick> <c3><ctcp><c1>]
CtcpChan <c1>- <c3>CTCP <c1>[<c3><nick> <c2>(<c3><chan><c2>) <c3><ctcp><c1>]
CtcpSelf <c1>><c3> CTCP <c2>[<c3><nick><c2>]<c3> <ctcp>
CtcpChanSelf <c1>><c3> CTCP <c2>[<c3><chan><c2>]<c3> <ctcp>
CtcpReply <c1>-<c3> CTCP <c2>[<c3><nick> <c3><ctcp> <c3>reply<c2>]<c3> <text>
CtcpReplySelf <c1>-<c3> CTCP<c2>reply <c2>[<c3><nick> <chan> <c3><ctcp> <c2>]<c4>:<c2>[<c3> <text> <c2>]
Notify <pre><c3> Notify <c2>[<c3><nick><c2>]<c4>:<c2>[ <c3><text><c2> ]
UNotify <pre><c3> UnNotify <c2>[<c3><nick><c2>]<c4>:<c2>[ <c3><text><c2> ]
Wallop <c2>-<nick>(<address>)- <text>
NoticeServer <c2>-<nick>- <text>
 
DNS <pre><c3> Looking up <address>...
DNSError <pre><c3> Unable to resolve <raddress>
DNSResolve <pre><c3> Resolved <address> to <raddress>.
Echo <text>
EchoTarget <pre> <text>
Error <pre><c3> ERROR:<c3> <text>
Load <pre><c3> Spell Script theme loaded.
Unload <pre> <c3>Spell Script theme unloaded.
 
RAW.311 !script whois.init %::nick %::address %::realname
RAW.314 <c2> > Name: <realname> <c2>Host: <address>
RAW.319 <c2> > Channels: <chan>
RAW.312 !script whois.server %::nick %::wserver %::serverinfo
raw.301 <c2> > Is away: <text>
RAW.307 <c2> > Is registed nick
raw.313 <c2> > Is an IRCop
raw.310 <c2> > Is helper (+h)
RAW.317 !script w.idle %::idletime %::signontime
RAW.318 <c2>« End of Whois Report
RAW.369 <pre><c3> /WHOWAS (End)
 
raw.001 !script raw_001  $+ %::c1 $+ - %::text
raw.002 !script
raw.003 <pre><c3> Server criation: <value>
raw.005 !script
raw.250 !script raw_250  $+ %::c1 $+ - %::text
raw.251 <pre><c3> Users Online: <users>
raw.252 <pre><c3> Operators online: <value>
raw.253 <pre><c3> Unknow connections: <value>
raw.254 <pre><c3> Registed channels: <value>
raw.255 !script
raw.265 <pre><c3> Local Users: <users> - Max: <value>
raw.266 !script
RAW.324 !script
RAW.332 <pre><c2>-<c3>- <c3>Topic: <text>
RAW.333 <pre><c2>-<c3>- <c3>Topic by <nick> on <text>
raw.341 <pre><c3> Invite:<c4> <nick> was inveted to join <chan>
raw.352 !script
raw.353 !script
raw.366 !script users %::chan
raw.004 !script raw_004  $+ %::c1 $+ - %::text
raw.006 !script
raw.007 !script
raw.213 !script
raw.256 <pre><c3> /admin [administrative info]:
raw.257 <pre><c3> <text>
raw.258 <pre><c3> <text>
raw.259 !script
raw.271 !script
raw.305 <pre><c3> You're no longer away
raw.306 <pre><c3> You're now away
raw.321 <pre><c3> Listing Channels
raw.323 <pre><c3> /list end.
raw.329 !script
raw.331 <pre><c2>-<c3>- topicless
raw.501 <pre><c3> Unknow Mode
raw.502 <pre><c3> Can't change other users modes
 
RAW.401 <pre><c3> <nick> Unknow Nick/Channel
raw.403 <pre><c3> <chan> Unknow Channel
raw.404 <pre><c3> Can't talk on <chan>
raw.421 <pre><c3> /<value> Unknow Command
raw.432 <pre><c3> Invalid Nickname
raw.433 <pre><c3> Nickname in use
raw.471 <pre><c3> Impossible to join <chan><c3> Users Limit (+l)
raw.473 <pre><c3> Impossible to join <chan><c3> Invited Only (+i)
raw.474 <pre><c3> Impossible to join <chan><c3> You're Banned (+b)
raw.475 <pre><c3> Impossible to join <chan><c3> Wrong Password
raw.482 <pre><c3> You're not a channel operator on <chan>
raw.401 <pre><c3> <nick> not online
raw.402 <pre><c3> Unknow Server
raw.405 <pre><c3> Impossible to join, max channels allowed
raw.406 <pre><c3> Whowas, no record
raw.405 <pre><c3> Double Identity - Not allowed
raw.422 !script
raw.437 <pre><c3> Can't change nick while banned
raw.442 <pre><c3> You're not on a channel
raw.468 <pre><c3> Only Servers can change that mode
raw.433 <pre><c3> Nick in use: <nick>
raw.436 <pre><c3> Nick, colision with: <nick>
raw.438 <pre><c3> Nickname Change too fast...
raw.439 <pre><c3> Target Change too fast...
raw.440 <pre><c3> Services Down, Try again later.
raw.441 <pre><c3> <nick> You're not on <chan>
raw.442 <pre><c3> You're not on <chan>
raw.443 <pre><c3> <nick> You're allready on <chan> <text>
raw.446 <pre><c3> Not allowed by Server
raw.461 <pre><c3> More information needed: <text>
raw.465 <pre><c3> You're banned on this server.
raw.467 <pre><c3> Impossible to join <chan><c3> Password Needed (+k)
raw.472 <pre><c3> Unknow Caracter: <text>
raw.478 <pre><c3> Impossible to ban <text>. <c3> Channel IBL Full
raw.481 <pre><c3> You're not an IRCoperator
raw.other <pre><c2> [ <c3>Raw <numeric> <c2>]:<c3> <text>
 
ImageToolbar default\tb.jpg
ImageSwitchbar fill default\sb.jpg
ImageStatus photo default\status.jpg
ImageMirc fill default\mci.jpg
 
Scheme1 Net Style
Scheme2 X-Yellow
Scheme3 X-Blue
Scheme4 Grey-Blue
Scheme5 X-Green
scheme6 DarkGold-Blue
Scheme7 Black
Scheme8 mELTED
Scheme9 Silver-Blue
 
[Scheme1]
BaseColors 11,12,13,15
RGBColors 255,255,255 0,0,0 147,147,255 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 41,42,72 67,95,148 125,161,235 184,201,235 90,97,115 214,219,247
 
ImageToolbar net\tb.jpg
ImageSwitchbar fill net\sb.jpg
ImageStatus photo net\status.jpg
ImageMirc fill net\mci.jpg
 
CLineOp 07
CLineVoice 12
CLineRegular 13
CLineMe 15
 
[Scheme2]
BaseColors 11,12,13,15
RGBColors 255,255,255 0,0,0 146,105,1 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 74,74,74 107,87,37 169,137,37 186,161,111 90,97,115 214,219,247
 
imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill net\mci.jpg
 
CLineOp 07
CLineVoice 12
CLineRegular 13
CLineMe 15
 
[Scheme3]
BaseColors 10,2,12,14
Colors 0,10,10,12,12,12,12,2,10,12,12,10,12,12,12,10,2,14,12,12,12,15,10,15,10,13,10,15
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 40,47,74 92,109,167 102,117,179 153,167,196 90,97,115 214,219,247
 
imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill default\mci.jpg
 
CLineOp 12
CLineVoice 12
CLineRegular 14
CLineMe 14
 
[Scheme4]
BaseColors 11,12,13,15
Colors 10,0,0,13,13,13,12,13,0,12,13,0,12,12,13,15,13,13,12,13,13,10,0,10,0,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 72,82,87 95,108,113 147,158,165 187,201,210 90,97,115 214,219,247
 
imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 07
CLineVoice 12
CLineRegular 13
CLineMe 15

[Scheme5]
BaseColors 11,12,13,15
Colors 10,0,0,13,13,13,12,13,0,12,13,0,12,12,13,15,13,13,12,13,13,10,0,10,0,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 57,64,59 88,98,92 131,146,136 153,171,159 154,160,159 194,201,196

imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 07
CLineVoice 12
CLineRegular 13
CLineMe 15

[Scheme6]
BaseColors 11,12,13,15
Colors 10,0,0,13,13,13,12,13,0,12,13,15,12,12,13,15,13,13,12,13,13,10,15,10,15,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 91,82,67 145,139,114 196,187,154 255,250,205 148,161,181 199,217,244

imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 15
CLineVoice 12
CLineRegular 13
CLineMe 14

[Scheme7]
BaseColors 11,12,13,15
Colors 10,15,15,13,13,13,12,15,15,15,12,11,12,12,12,11,15,15,12,13,12,10,11,10,11,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 168,170,172 37,40,41 57,62,64 85,91,94 112,134,217 34,41,89

imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 15
CLineVoice 13
CLineRegular 13
CLineMe 15

[Scheme8]
BaseColors 11,12,13,0
Colors 10,15,15,13,13,13,12,13,15,12,13,15,12,12,13,15,13,13,12,13,13,10,15,10,15,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 51,102,102 84,146,146 163,198,198 184,201,201 175,175,175 214,219,247

imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 15
CLineVoice 13
CLineRegular 12
CLineMe 0

[Scheme9]
BaseColors 11,12,13,15
Colors 10,0,0,13,13,13,13,13,13,13,13,0,13,13,13,0,13,13,13,13,13,10,0,10,0,13,10,10
RGBColors 255,255,255 0,0,0 0,0,127 0,144,0 230,50,50 128,0,0 160,0,160 255,178,50 255,255,0 0,248,0 131,143,158 160,160,160 190,190,190 221,221,221 66,72,80 199,217,244

imageToolbar none
imageSwitchbar none
ImageStatus none
ImageMirc fill none
 
CLineOp 15
CLineVoice 12
CLineRegular 13
CLineMe 14

