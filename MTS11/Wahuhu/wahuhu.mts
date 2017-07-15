[mts]
Name wahuhu
MTSVERSION 1.1
VERSION 1.1
AUTHOR Valkmor
EMAIL valkmor@hotmail.com
DESCRIPTION My 3rd theme.. hope you'll like it
SCRIPT wahuhu.mrc
WEBSITE http://www.z-scripters.tech.nu
Prefix •••
Load <pre> («Wahuhu».«Theme») •••
Unload <pre> («Wahuhu».«Theme») •••
Timestamp ON
TimestampFormat <c3>[<c1>HH:nn<c3>]
Scheme1 Default(12pts)
Scheme2 BlackBG(10pts)
Scheme3 WhiteBG(10pts)
Scheme4 BlackBG(12pts)
Scheme5 WhiteBG(12pts)

BaseColors 11,14,00,02
Colors 02,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,00,02,11,11
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 90,120,250 128,20,20 128,128,128 208,208,208

Join <pre> 11.::14Join11.10(14«15<nick>14»11.14«15<chan>14»11.14«15<address>14»10)11::.
JoinSelf <pre> 11.::14Joining11.10(14«15<chan>14»10)11::.
Quit <pre> 11.::14Quit11.10(14«15<nick>14»11.14«15<address>14»10)5.15<text>11::.
Part <pre> 11.::14Part11.10(14«15<chan>14»11.14«15<nick>14»11.14«15<text>14»10)11::.
Nick <pre> 11.::14Nick11.10(14«15<nick>14»11.14«15<newnick>14»10)11::.
NickSelf <pre> 11.::14Nick11.10(14«15<me>14»11.14«15<newnick>14»10)11::.
Topic <pre> 11.::14Topic11.10(14«15<chan>14»11.14«15<nick>14»11.14«15<text>14»10)11::.
Mode <pre> 11.::14Mode11.10(14«15<chan>14»11.14«15<nick>14»11.14«15<modes>14»10)11::.
INVITE <pre> 11.::14Mode11.10(15A lamer named 14«15<nick>14»15 Invited you to join 14«15<chan>14»10)11::.
Kick <pre> 11.::14Kick11.10(14«15<knick>14»15 has been kicked out of 14«15<chan>14»15 by 14«15<nick>14»11.15 Reason:14«11<text>14»10)11::.
KickSelf <pre> 11.::14Kick11.10(15You've been kicked out of 14«15<chan>14»1 by 14«15<nick>14»11.1 Reason:14«15<text>14»10)11::.
ModeUser <pre> 11.::14Usermode11.10(14«15<modes>14»10)11::.
TextQuery  14«0<cmode>0<nick>14»14 <text>
TextQuerySelf 14«0<cmode>0<me>14»15 <text>
TextChan 14«11<cmode>0<nick>14»14 <text>
TextChanSelf 14«10<cmode>0<me>14»15 <text>
ActionChan 11•••14<nick> <text>
ActionChanSelf •••14<me> <text>
Notify <pre> 14Notify: 14•••0<nick>14•••4 is online!:0 <text>
UNotify <pre> 14Notify: offline 14•••0<nick>14•••4 has left IRC.0 <text>
NoticeChan <pre> 14Notice:11 14•••0<chan>14•••:3 <nick> 0<text>
Notice <pre> 14Notice: 14•••0<nick>14•••:0 <text>

raw.252 <pre> 4Operators online :3 <value>
raw.254 <pre> 4Channels :0 <value>
raw.265 <pre> 4Locals users :0 <users> 
raw.315 <pre> 4End of 0/who 11for 3<value>
raw.375 <pre> 4Mesage of the day
raw.376 <pre> 4End of0 /motd
raw.432 <pre> 0<nick> 4: Erroneus Nickname
raw.433 <pre> 0<nick> 4: nick already in use
raw.441 <pre> 0<nick> 4: is not on 0<chan>
raw.442 <pre> 4You're not on 0<chan>
raw.443 <pre> 0<nick> 4: is already on 0<chan>
raw.332 <pre> 14Topic: 0<text>
raw.333 <pre> 14Topic set by:0 <nick> 
raw.311 !script whois_start2
raw.319 10|11Channels:0 <chan>
raw.312 10|11Server:0 <wserver>  <serverinfo> 
raw.301 10|11Away:0 <text>
raw.317 !script idle_start2 <idletime>
raw.318 10\_________/>10¯¯¯¯¯¯¯¯¯¯10<\__________/

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineMe 11
ClineRegular 0

ClineCharOwner 1
ClineCharOP 9
ClineCharHOP 2%
ClineCharVoice 9

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10

[Scheme1]

FontDefault Arial,12
FontQuery Arial,12
FontChan Arial,12

[Scheme2]
BaseColors 11,14,00,02
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,00,01,11,11
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 90,120,250 128,20,20 128,128,128 208,208,208

[Scheme3]
Timestamp ON
TimestampFormat 1[<c1>HH:nn1]

BaseColors 11,14,00,02
Colors 00,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,00,01,00,11,11
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 90,120,250 128,20,20 128,128,128 208,208,208

Join <pre> 11.::14Join11.10(14«11<nick>14»11.14«11<chan>14»11.14«11<address>14»10)11::.
JoinSelf <pre> 11.::14Joining11.10(14«15<chan>14»10)11::.
Quit <pre> 11.::14Quit11.10(14«11<nick>14»11.14«11<address>14»10)5.11<text>11::.
Part <pre> 11.::14Part11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<text>14»10)11::.
Nick <pre> 11.::14Nick11.10(14«11<nick>14»11.14«11<newnick>14»10)11::.
NickSelf <pre> 11.::14Nick11.10(14«11<me>14»11.14«11<newnick>14»10)11::.
Topic <pre> 11.::14Topic11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<text>14»10)11::.
Mode <pre> 11.::14Mode11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<modes>14»10)11::.
INVITE <pre> 11.::14Mode11.10(1A lamer named 14«11<nick>14»1 Invited you to join 14«11<chan>14»10)11::.
Kick <pre> 11.::14Kick11.10(14«11<knick>14»1 has been kicked out of 14«11<chan>14»1 by 14«11<nick>14»11.1 Reason:14«11<text>14»10)11::.
KickSelf <pre> 11.::14Kick11.10(1You've been kicked out of 14«11<chan>14»1 by 14«11<nick>14»11.1 Reason:14«11<text>14»10)11::.
ModeUser <pre> 11.::14Usermode11.10(14«11<modes>14»10)11::.
TextQuery  11«14<cmode>14<nick>11»14 <text>
TextQuerySelf 11«14<cmode>1<me>11»1 <text>
TextChan 11«11<cmode>14<nick>11»14 <text>
TextChanSelf 11«10<cmode>1<me>11»1 <text>
ActionChan 11•••1<nick> <text>
ActionChanSelf •••1<me> <text>
Notify <pre> 1Notify: 14•••11<nick>14•••1 is online!:11 <text>
UNotify <pre> 1Notify: offline 14•••0<nick>14•••4 has left IRC.0 <text>
NoticeChan <pre> 1Notice:11 14•••11<chan>14•••:11<nick> 15<text>
Notice <pre> 1Notice: 14•••11<nick>14•••:11 <text>

raw.252 <pre> 1Operators online :11 <value>
raw.254 <pre> 1Channels :11 <value>
raw.265 <pre> 1Locals users :11 <users> 
raw.315 <pre> 1End of 11/who 1for 11<value>
raw.375 <pre> 1Mesage of the day
raw.376 <pre> 1End of11 /motd
raw.432 <pre> 11<nick> 1: Erroneus Nickname
raw.433 <pre> 11<nick> 1: nick already in use
raw.441 <pre> 11<nick> 1: is not on 11<chan>
raw.442 <pre> 1You're not on 11<chan>
raw.443 <pre> 11<nick> 1: is already on 11<chan>
raw.332 <pre> 1Topic: 11<text>
raw.333 <pre> 1Topic set by:11 <nick> 
raw.311 !script whois_start
raw.319 10|11Channels:14 <chan>
raw.312 10|11Server:14 <wserver>  <serverinfo> 
raw.301 10|11Away:14 <text>
raw.317 !script idle_start <idletime>
raw.318 10\_________/>10¯¯¯¯¯¯¯¯¯¯10<\__________/

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineMe 11
ClineRegular 1

ClineCharOwner 1
ClineCharOP 9
ClineCharHOP 2%
ClineCharVoice 9

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10

[Scheme4]
BaseColors 11,14,00,02
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,00,01,11,11
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 90,120,250 128,20,20 128,128,128 208,208,208

FontDefault Arial,12
FontQuery Arial,12
FontChan Arial,12

[Scheme5]
Timestamp ON
TimestampFormat 1[<c1>HH:nn1]

BaseColors 11,14,00,02
Colors 00,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,00,01,00,11,11
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 90,120,250 128,20,20 128,128,128 208,208,208

Join <pre> 11.::14Join11.10(14«11<nick>14»11.14«11<chan>14»11.14«11<address>14»10)11::.
JoinSelf <pre> 11.::14Joining11.10(14«15<chan>14»10)11::.
Quit <pre> 11.::14Quit11.10(14«11<nick>14»11.14«11<address>14»10)5.11<text>11::.
Part <pre> 11.::14Part11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<text>14»10)11::.
Nick <pre> 11.::14Nick11.10(14«11<nick>14»11.14«11<newnick>14»10)11::.
NickSelf <pre> 11.::14Nick11.10(14«11<me>14»11.14«11<newnick>14»10)11::.
Topic <pre> 11.::14Topic11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<text>14»10)11::.
Mode <pre> 11.::14Mode11.10(14«11<chan>14»11.14«11<nick>14»11.14«11<modes>14»10)11::.
INVITE <pre> 11.::14Mode11.10(1A lamer named 14«11<nick>14»1 Invited you to join 14«11<chan>14»10)11::.
Kick <pre> 11.::14Kick11.10(14«11<knick>14»1 has been kicked out of 14«11<chan>14»1 by 14«11<nick>14»11.1 Reason:14«11<text>14»10)11::.
KickSelf <pre> 11.::14Kick11.10(1You've been kicked out of 14«11<chan>14»1 by 14«11<nick>14»11.1 Reason:14«11<text>14»10)11::.
ModeUser <pre> 11.::14Usermode11.10(14«11<modes>14»10)11::.
TextQuery  11«14<cmode>14<nick>11»14 <text>
TextQuerySelf 11«14<cmode>1<me>11»1 <text>
TextChan 11«11<cmode>14<nick>11»14 <text>
TextChanSelf 11«10<cmode>1<me>11»1 <text>
ActionChan 11•••1<nick> <text>
ActionChanSelf •••1<me> <text>
Notify <pre> 1Notify: 14•••11<nick>14•••1 is online!:11 <text>
UNotify <pre> 1Notify: offline 14•••0<nick>14•••4 has left IRC.0 <text>
NoticeChan <pre> 1Notice:11 14•••11<chan>14•••:11<nick> 15<text>
Notice <pre> 1Notice: 14•••11<nick>14•••:11 <text>

raw.252 <pre> 1Operators online :11 <value>
raw.254 <pre> 1Channels :11 <value>
raw.265 <pre> 1Locals users :11 <users> 
raw.315 <pre> 1End of 11/who 1for 11<value>
raw.375 <pre> 1Mesage of the day
raw.376 <pre> 1End of11 /motd
raw.432 <pre> 11<nick> 1: Erroneus Nickname
raw.433 <pre> 11<nick> 1: nick already in use
raw.441 <pre> 11<nick> 1: is not on 11<chan>
raw.442 <pre> 1You're not on 11<chan>
raw.443 <pre> 11<nick> 1: is already on 11<chan>
raw.332 <pre> 1Topic: 11<text>
raw.333 <pre> 1Topic set by:11 <nick> 
raw.311 !script whois_start
raw.319 10|11Channels:14 <chan>
raw.312 10|11Server:14 <wserver>  <serverinfo> 
raw.301 10|11Away:14 <text>
raw.317 !script idle_start <idletime>
raw.318 10\_________/>10¯¯¯¯¯¯¯¯¯¯10<\__________/

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineMe 11
ClineRegular 1

ClineCharOwner 1
ClineCharOP 9
ClineCharHOP 2%
ClineCharVoice 9

FontDefault Arial,12
FontQuery Arial,12
FontChan Arial,12