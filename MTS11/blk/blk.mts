;Versions
;1 - First release
;2-10 Updates - Not too good exept for the blixis
;11 - Redesigned whole theme.
;12 - Cleaned up some things..
[mts]
Name Black::out & Whiteout
Author |cyF|amez|
EMail scripter@toln.net
Description A black and white based theme with a new look ;)
MTSVersion 1.1
Version 12

Timestamp ON
TimestampFormat 3(hh:mm:ss tt)

Scheme1 Redbout
Scheme2 Bluebout
Scheme3 Whatever
Scheme4 Redxi
Scheme5 Greenxi
Scheme6 Yellowxi
Scheme8 WhiteOut
Scheme7 Bluxi
Scheme9 WhiteOut2
Scheme10 Green Dance
Scheme11 Snow
Scheme12 Greyxi
Scheme13 Grey Night
Colors 01,07,04,05,02,03,03,03,03,03,03,15,05,07,06,15,03,15,03,05,00,01,07,01,04,15,06,00

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 07
CLineOp 09
CLineHOp 04
CLineVoice 02
CLineRegular 03
CLineMe 09
CLineIrcOp 10

CLineCharOwner 07.
CLineCharOp 09@
CLineCharHOp 04%
CLineCharVoice 02+
CLineCharRegular 03'
CLineCharMe 09(
CLineCharIrcOp 10!@

TextChan 9<nick> 3: <text>
TextChanSelf 9<me> 3: <text>
ActionChan 9<nick> 14*3<text>
ActionChanSelf 15<me> 14*0<text>

Mode 14Channel mode[s] is [are] changed to <modes>
Join 15<nick> joins <chan>

RAW.314 015Whowas on14<nick>.0<adress><realname>
RAW.311 3Whois on <nick> <adress> (<realname>)
RAW.319 0Channels -- 0<chan>
RAW.312 0Server ::0<wserver>0:: <serverinfo>
RAW.301 0 Is away::0<text>
RAW.307 0<isregd> a Registered Nick
RAW.313 0IRCop -- <isoper>,<operline?
RAW.317 0Idle:<idletime>,0Signed on at:<signontime>
RAW.318 3End of Whois on 0<nick>.
RAW.369 15End of Whowas on 0<nick>.

RAW.401 0No such Nickname15<nick>
RAW.403 15No such Channel -->14<chan>

[Scheme1]
Timestamp ON
TimestampFormat 4[hh:nn:ss:tt]

Colors 05,00,03,04,04,03,03,03,03,03,03,01,04,07,06,01,03,02,03,04,01,04,00,05,00,15,06,01

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 04
CLineOp 04
CLineHOp 04
CLineVoice 04
CLineRegular 04
CLineMe 04
CLineIrcOp 04

CLineCharOwner 04.
CLineCharOp 04@
CLineCharHOp 04%
CLineCharVoice 04+
CLineCharRegular 04
CLineCharMe 04>
CLineCharIrcOp 04@%

TextChan 4<nick>: <text>
TextChanSelf 4<me>: <text>
ActionChan 4<nick> * <text>
ActionChanSelf 4<me> * <text>

Mode 4Channel mode[s] is [are] changed to <modes>
Join 4<nick> joins <chan>

RAW.311 4Whois on 4<nick>.4<adress><realname>
RAW.314 4Whowas on4<nick>.4<adress><realname>
RAW.319 4Channels -- 4<chan>
RAW.312 4Server ::4<wserver>4:: <serverinfo>
RAW.301 4 Is away::4<text>
RAW.307 4Is a Registered--4<isregd>
RAW.313 4IRCop -- <isoper>,<operline?
RAW.317 4Idle:<idletime>,4Signed on at:<signontime>
RAW.318 4End of Whois on 4<nick>.
RAW.369 4End of Whowas on 4<nick>.

RAW.401 4No such Nickname0<nick>
RAW.403 4No such Channel -->0<chan>


[Scheme2]
Timestamp ON
TimestampFormat 12(hh:nn:ss)

Colors 01,05,03,04,10,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,01,00,01,00,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 14
CLineOp 04
CLineHOp 04
CLineVoice 14
CLineRegular 04
CLineMe 04
CLineIrcOp 12

CLineCharOwner 14.
CLineCharOp 04@
CLineCharHOp 12%
CLineCharVoice 14+
CLineCharRegular 12'
CLineCharMe 12>
CLineCharIrcOp 12@%

TextChan 12<nick>:0 <text>
TextChanSelf 12<me>: 0<text>
ActionChan 12<nick> 12*0<text>
ActionChanSelf 2<me> 13*0<text>

Mode 12Channel mode[s] is [are] changed to <modes>
Join 0<nick> joins <chan>

RAW.311 12Whois on 12<nick>.12<adress><realname>
RAW.314 12Whowas on12<nick>.12<adress><realname>
RAW.319 12Channels -- 12<chan>
RAW.312 12Server ::12<wserver>0::<serverinfo>
RAW.301 12 Is away::12<text>
RAW.307 12Is a Registered--12<isregd>
RAW.313 12IRCop -- <isoper>,<operline?
RAW.317 12Idle:<idletime>,12Signed on at:<signontime>
RAW.318 12End of Whois on 12<nick>.
RAW.369 12End of Whowas on 12<nick>.

RAW.401 12No such Nickname0<nick>
RAW.403 12No such Channel -->0<chan>


[Scheme3]
Timestamp ON
TimestampFormat 0(HH:nn:ss)

Colors 01,05,03,04,10,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,01,00,01,00,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 114
CLineOp 14
CLineHOp 14
CLineVoice 15
CLineRegular 14
CLineMe 14
CLineIrcOp 0

CLineCharOwner 14.
CLineCharOp 14@
CLineCharHOp 15%
CLineCharVoice 15+
CLineCharRegular 04'
CLineCharMe 12*
CLineCharIrcOp 04!@

TextChan 0<nick>:15 <text>
TextChanSelf 0<me>: 15<text>
ActionChan 15<nick>15*15<text>
ActionChanSelf 14<me>15*0<text>

Mode 5Channel mode[s] is [are] changed to <modes>
Join 14<nick> joins <chan>

RAW.311 0Whois on15<nick>.14<adress><realname>
RAW.314 0Whowas on14<nick>.0<adress><realname>
RAW.319 0Channels -- 15<chan>
RAW.312 0Server ::15<wserver>14:: <serverinfo>
RAW.301 0 Is away::15<text>
RAW.307 0Is a Registered--14<isregd>
RAW.313 0IRCop -- <isoper>,<operline?
RAW.317 0Idle:<idletime>,14Signed on at:<signontime>
RAW.318 0End of Whois on 14<nick>.
RAW.369 0End of Whowas on 14<nick>.

RAW.401 12No such Nickname<nick>
RAW.403 12No such Channel -->14<chan>

[scheme4]
Timestamp ON
TimestampFormat 4(0 HH:nn4)

Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,12
FontQuery Tahoma,12
FontChan Tahoma,12

CLineOwner 12
CLineOp 12
CLineHOp 11
CLineVoice 03
CLineMe 04
CLineIrcOp 08

CLineCharOwner 12.
CLineCharOp 12@
CLineCharHOp 11%
CLineCharVoice 03+
CLineCharMe 04
CLineCharIrcOp 08

TextChan 4(0<nick>4)0 <text>
TextChanSelf 4(0<nick>4)0 <text>
ActionChan 4*<nick> <text>
ActionChanSelf 4*<nick> <text>

Mode 4(0<nick>4) Set mode of <chan> to 0 <modes>
Join 4<nick>0(<address>) 4 joins <channel>
JoinSelf 4<me>0(<address>) 4 joins <channel>
Kick 4<nick>0 (<address>) 4got kicked from <channel>
Topic 4The topic of 0<Channel> 4got changed to 4<text>

RAW.311 4Whois on <nick>-0<address>, <realname>
RAW.314 0Who4was on 0<nick> -4<address> <realname>
RAW.319 4<nick> isin 0<chan>
RAW.312 4<Nick> is on <wserver> 0<serverinfo>
RAW.301 4<Nick> is 0Away 4<text>
RAW.307 4<nick> 0<isregd>
RAW.313 4<nick> <isoper> 0<operline>
RAW.317 4Idle time:0<idletime> 4Signon Time:0<signontime>
RAW.318 4End of Whois
RAW.369 4End of WhoWas


[Scheme5]
Timestamp ON
TimestampFormat 3(0 HH:nn3)

Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,12
FontQuery Tahoma,12
FontChan Tahoma,12

CLineOwner 12
CLineOp 12
CLineHOp 11
CLineVoice 03
CLineMe 04
CLineIrcOp 08

CLineCharOwner 12.
CLineCharOp 12@
CLineCharHOp 11%
CLineCharVoice 03+
CLineCharMe 04
CLineCharIrcOp 08

TextChan 3(0<nick>)0 <text>
TextChanSelf 3(0<nick>3)0 <text>
ActionChan 9*<nick> <text>
ActionChanSelf 9*<nick> <text>

Mode 3(0<nick>3) Set mode of <chan> to 0 <modes>
Join 3<nick>0(<address>) 3 joins <channel>
JoinSelf 3<me>0(<address>) 3 joins <channel>
Kick 3<nick>0 (<address>) 3got kicked from <channel>
Topic 3The topic of 0<Channel> 3got changed to 3<text>

RAW.311 3Whois on <nick>-0<address>, <realname>
RAW.314 0Who3was on 0<nick> -3<address> <realname>
RAW.319 3<nick> isin 0<chan>
RAW.312 3<Nick> is on <wserver> 0<serverinfo>
RAW.301 3<Nick> is 0Away 3<text>
RAW.307 3<nick> 0<isregd>
RAW.313 3<nick> <isoper> 0<operline>
RAW.317 3Idle time:0<idletime> 3Signon Time:0<signontime>
RAW.318 3End of Whois
RAW.369 3End of WhoWas


[Scheme6]
Timestamp ON
TimestampFormat 8(0 HH:nn8)

Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,12
FontQuery Tahoma,12
FontChan Tahoma,12

CLineOwner 12
CLineOp 12
CLineHOp 11
CLineVoice 04
CLineMe 02
CLineIrcOp 08

CLineCharOwner 12-
CLineCharOp 12@
CLineCharHOp 11%
CLineCharVoice 03+
CLineCharMe .
CLineCharIrcOp !@

TextChan 8(0<nick>)0 <text>
TextChanSelf 8(0<nick>8)0 <text>
ActionChan 8*<nick> <text>
ActionChanSelf 8*<nick> <text>

Mode 8(0<nick>8) Set mode of <chan> to 0 <modes>
Join 8<nick>0(<address>) 8 joins <channel>
JoinSelf 8<me>0(<address>) 8 joins <channel>
Kick 8<nick>0 (<address>) 8got kicked from <channel>
Topic 8The topic of 0<Channel> 8got changed to 8<text>

RAW.311 8Whois on <nick>-0<address>, <realname>
RAW.314 0Who8was on 0<nick> -8<address> <realname>
RAW.319 8<nick> isin 0<chan>
RAW.312 8<Nick> is on <wserver> 0<serverinfo>
RAW.301 8<Nick> is 0Away 8<text>
RAW.307 8<nick> 0<isregd>
RAW.313 8<nick> <isoper> 0<operline>
RAW.317 8Idle time:0<idletime> 8Signon Time:0<signontime>
RAW.318 8End of Whois
RAW.369 8End of WhoWas


[scheme7]
Timestamp ON
TimestampFormat 12(0HH:nn12)

Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,12
FontQuery Tahoma,12
FontChan Tahoma,12

CLineOwner 12
CLineOp 12
CLineHOp 11
CLineVoice 03
CLineMe 04
CLineIrcOp 08

CLineCharOwner 12.
CLineCharOp 12@
CLineCharHOp 11%
CLineCharVoice 03+
CLineCharMe 04
CLineCharIrcOp 08

TextChan 12(0<nick>12)0 <text>
TextChanSelf 12(0<nick>12)0 <text>
ActionChan 12*<nick> <text>
ActionChanSelf 12*<nick> <text>

Mode 12(0<nick>12) Set mode of <chan> to 0 <modes>
Join 12<nick>0(<address>) 12 joins <channel>
JoinSelf 12<me>0(<address>) 12 joins <channel>
Kick 12<nick>0 (<address>) 12got kicked from <channel>
Topic 12The topic of 0<Channel> 12got changed to 12<text>

RAW.311 12Whois on <nick>-0<address>, <realname>
RAW.314 0Who12was on 0<nick> -12<address> <realname>
RAW.319 12<nick> isin 0<chan>
RAW.312 12<Nick> is on <wserver> 0<serverinfo>
RAW.301 12<Nick> is 0Away 12<text>
RAW.307 12<nick> 0<isregd>
RAW.313 12<nick> <isoper> 0<operline>
RAW.317 12Idle time:0<idletime> 12Signon Time:0<signontime>
RAW.318 12End of Whois
RAW.369 12End of WhoWas

[Scheme8]
Timestamp ON
TimestampFormat 4{HH:5nn4}

BaseColors 01,01,01,01
Colors 00,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

TextChan 4(<nick>)1: <text>
TextChanSelf 4(<me>)1: <text>
ActionChan 4*1<nick> <text>
ActionChanSelf 4*1<me> <text>

Mode 3Channel mode[s] is [are] changed to <modes>
Join 3<nick> 1Joins <chan>
Topic 3THe channel's topic changed to {<text>}

RAW.311 1Whois on <nick>(<address>,<realname>)
RAW.314 1Whowas on <nick>(<address>,<realname)
RAW.319 1<nick> Is on Channels:<Chan>
RAW.312 1<nick> Is on <wserver> (<serverinfo>)
RAW.301 1<nick> is away (<text>)
RAW.307 1<nick> <isregd> registered
RAW.313 1<nick> <isoper> a oper (<operline>)
RAW.317 1Idle:<idletime> (<signontime>)
RAW.318 1End of whois on <nick>
RAW.369 1End of whowas on <nick>


[Scheme9]
Timestamp ON
TimestampFormat 12(HH:5nn12)

Colors 00,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

TextChan 12(<nick>): <text>
TextChanSelf 12(<me>): <text>
ActionChan 12*13<nick> <text>
ActionChanSelf 12*<me> <text>

Mode 12Channel mode[s] is [are] changed to <modes>
Join 12<nick> 3Joins 12<chan>
Topic 12THe channel's topic changed to {<text>}

RAW.311 12Whois on <nick>(<address>,<realname>)
RAW.314 12Whowas on <nick>(<address>,<realname)
RAW.319 12<nick> Is on Channels:<Chan>
RAW.312 12<nick> Is on <wserver> (<serverinfo>)
RAW.301 12<nick> is away (<text>)
RAW.307 12<nick> <isregd> registered
RAW.313 12<nick> <isoper> a oper (<operline>)
RAW.317 12Idle:<idletime> (<signontime>)
RAW.318 12End of whois on <nick>
RAW.369 12End of whowas on <nick>

[Scheme10]
Timestamp ON
TimestampFormat 3[9HH:3mmtt]

Colors 00,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,03,00,01,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 03
CLineOp 10
CLineHOp 11
CLineVoice 12
CLineMe 09
CLineIrcOp 02

CLineCharOwner 03.
CLineCharOp 10@
CLineCharHOp 11%
CLineCharVoice 12+
CLineCharMe 09>
CLineCharIrcOp 02@%

TextChan 3(<nick>): 1<text>
TextChanSelf 2(<me>): 1<text>
ActionChan 3*<nick> <text>
ActionChanSelf 3*<me> <text>

Mode 3Channel mode[s] is [are] changed to <modes>
Join 3<nick> joins <chan>

RAW.311 -->3Whois <nick> <adress> <realname>
RAW.314 -->3Whowas --<nick> <adress> <realname>
RAW.319 3Channels --> <chan>
RAW.312 3Server --> <wserver> <serverinfo>
RAW.301 3Away --> <text>
RAW.307 1Registered --> <isregd>
RAW.313 3IRCop --> <isoper> <operline>
RAW.317 3Idle time:3<idletime> 3Signon Time:3<signontime>
RAW.318 3End of whois on <nick>

[Scheme11]
Timestamp ON
TimestampFormat 11(12HH:nn12)

BaseColors 01,01,01,01
Colors 00,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

TextChan 11(2<nick>12) <text>
TextChanSelf 11(2<nick>12) <text>
ActionChan 11(2<nick>12) <text>
ActionChanSelf 11(2<me>12) <text>
TextQuery 11(2<nick>11) <text>
TextQuerySelf 11(2!<nick>!11) <text>
ActionQuery 11(2<nick>12) <text>
ActionQuerySelf 11(2!<nick>!12) <text>

RAW.311 12Whois on <nick>-11<address>, <realname>
RAW.314 12Who3was on 11<nick> -11<address> <realname>
RAW.319 12<nick> isin 11<chan>
RAW.312 12<Nick> is on <wserver> 11<serverinfo>
RAW.301 12<Nick> is 11Away 11<text>
RAW.307 12<nick> 11<isregd>
RAW.313 12<nick> <isoper> 11<operline>
RAW.317 12Idle time:11<idletime> 11Signon Time:11<signontime>
RAW.318 12End of Whois
RAW.369 12End of WhoWas

Mode 11(2<nick>) sets modes to: <modes>12
Join 11(2<nick>12) joins <chan>
JoinSelf 11(2!You!12) joined <chan>
Part 11(2<< <nick>12) exits <chan> 12(<text>)
Kick 11(2<< <nick>12) was kicked from <chan> 12(<text>)
KickSelf 11(2<< !!<me>!!12) was kicked from <chan> 12(<text>)
Quit 11(2<nick>12) quits IRC <test>
Topic 11(2<nick>12) changes the topic to <text>

[Scheme12]
Timestamp ON
TimestampFormat 3(0 HH:nn3)

Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15

FontDefault Tahoma,12
FontQuery Tahoma,12
FontChan Tahoma,12

CLineOwner 15
CLineOp 15
CLineHOp 15
CLineVoice 15
CLineMe 15
CLineIrcOp 15

CLineCharOwner 14.
CLineCharOp 15@
CLineCharHOp 14%
CLineCharVoice 15+
CLineCharMe 14
CLineCharIrcOp 15

TextChan 15(14<nick>)14 <text>
TextChanSelf 15(14<nick>15)0 <text>
ActionChan 14*<nick> <text>
ActionChanSelf 14*<me> <text>

Mode 15(14<nick>15) Set mode of <chan> to 0 <modes>
Join 14<nick>15(<address>) 14 joins <channel>
JoinSelf 15<me>14(<address>) 15 joins <channel>
Kick 14<nick>14 (<address>) 15got kicked from <channel>
Topic 14The topic of 15<Channel> 14got changed to 15<text>

RAW.311 14Whois on <nick>-0<address>,<realname>
RAW.314 14Who3was on 0<nick> -3<address> <realname>
RAW.319 14<nick> isin 0<chan>
RAW.312 14<Nick> is on <wserver> 0<serverinfo>
RAW.301 14<Nick> is 0Away 3<text>
RAW.307 15<nick> 0<isregd>
RAW.313 15<nick> <isoper> 0<operline>
RAW.317 15Idle time:0<idletime> 3Signon Time:0<signontime>
RAW.318 14End of Whois
RAW.369 15End of WhoWas

[Scheme13]
Timestamp ON
TimestampFormat (hh:nntt)

TextChan 2(<nick>) <text>

Colors 01,07,04,05,00,09,13,13,08,02,13,14,13,07,02,05,13,08,03,04,14,15,05,01,03,01
RGBColors 255,255,255 17,0,18 156,63,255 47,133,255 255,0,0 255,178,63 237,255,63 0,145,57 0,183,200 31,235,255 15,43,255 252,95,255 0,59,72 123,111,255 127,127,127 207,208,207

CLineOwner 07
CLineOP 10
CLineHOP 13
CLineVoice 07
CLineRegular 15
CLineMe 03
CLineFriend 08
CLineEnemy 04
CLineIrcOP 13

CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10

TextChanSelf 2(<me>) <text>
ActionChan 2*<nick>: <text>
ActionChanSelf 2*<me>: <text>

Mode 2(3<nick>2) Set mode of <chan> to 3<modes>
Join 3(<nick>2(<address>)3 joins <channel>
JoinSelf 3<me>2(<address>) 3 joins <channel>
Kick 2<nick>3 (<address>) 2got kicked from <channel>
Topic 3The topic of 2<Channel> 2got changed to 3<text>

RAW.311 13Whois on <nick>-2<address>, <realname>
RAW.314 13Who3was on 0<nick> -2<address> <realname>
RAW.319 13<nick> isin 2<chan>
RAW.312 13<Nick> is on <wserver> 2<serverinfo>
RAW.301 13<Nick> is 2Away 3<text>
RAW.307 13<nick> 2<isregd>
RAW.313 13<nick> <isoper> 3<operline>
RAW.317 13Idle time:0<idletime> 3Signon Time:2<signontime>
RAW.318 13End of Whois
RAW.369 13End of WhoWas