; ------------------------------------------------------------------------------
; Negative Entropy - Default Scheme
; ------------------------------------------------------------------------------
[mts]
Name             Negative Entropy
Author           DarkSaidin
EMail            mail@darksaidin.de
Description      A clear theme with good readability. It has a customizeable nickspace (works even with proportional fonts), can separate events from text and supports different timestamps.
Version          1.1
MTSVersion       1.1
Script           theme-nentropy.mrc

Load             !script ct.load Default
Unload           !script ct.unload 

Timestamp        ON

RGBColors        255,255,255 0,0,0 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 0,252,0 0,147,147 0,255,255 0,0,255 255,0,255 114,111,103 158,153,143
BaseColors       14,01,15,00
Colors           0,1,7,13,1,1,1,3,4,7,15,1,1,1,1,1,5,5,1,1,1,0,1,0,1,11,12,0
		 
FontDefault      Tahoma,11
FontQuery        Tahoma,11
FontChan         Tahoma,11

Prefix           
ParenText        <c1>[<text><c1>]

CLineOwner       05
CLineOp          05
CLineHOp         05
CLineVoice       07
CLineRegular     03
CLineMe          15

CLineCharOwner   05*
CLineCharOp      05@
CLineCharHOp     05%
CLineCharVoice   07+
CLineCharRegular 03
CLineCharMe      15

TextChan         !script $ct.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $ct.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $ct.outtext(—›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $ct.outtext(‹—, %::me, %::cmode, %::text)

TextMsg          !script $ct.outtext(—›, %::nick, %::cmode, %::text)
TextMsgSelf      !script $ct.outtext(‹—, %::me, %::cmode, %::text)

ActionChan       !script $ct.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $ct.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $ct.outemote(—›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $ct.outemote(‹—, %::me, %::cmode, %::text)

Notice           !script $ct.outtext(n-›, %::nick, %::cmode, %::text)
NoticeSelf       !script $ct.outtext(‹-n, %::me, %::cmode, %::text)
NoticeChan       !script $ct.outtext(#n›, %::nick, %::cmode, %::text)
NoticeSelfChan   !script $ct.outtext(‹n#, %::me, %::cmode, %::text)

ctcp             !script $ct.outtext(c-›, %::nick, %::cmode, %::ctcp %::text)
ctcpReply        !script $ct.outtext(c-›, %::nick, %::cmode, %::text)
ctcpSelf         !script $ct.outtext(‹-c, %::me, %::cmode, %::ctcp)
ctcpReplySelf    !script $ct.outtext(‹-c, %::me, %::cmode, %::ctcp $+ -REPLY for %::nick $+ : %::text)
ctcpChan         !script $ct.outtext(#c›, %::nick, %::cmode, %::ctcp %::text)
ctcpChanSelf     !script $ct.outtext(‹c#, %::me, %::cmode, %::ctcp)

Nick             !script $ct.outevent(:=, %::nick, %::cmode, changed nick to %::newnick)
NickSelf         !script $ct.outevent(:=, %::me, %::cmode, changed nick to %::newnick)
Mode             !script $ct.outevent(**, %::nick, %::cmode, sets mode: %::modes)
Topic            !script $ct.outevent(##, %::nick, %::cmode, sets topic: %::text)
Invite           !script $ct.outevent(‹-?, %::nick, %::cmode, has invited you to join %::chan)
Join             !script $ct.outevent(›››, %::nick, %::cmode, joined the channel)
Part             !script $ct.outevent(‹‹‹, %::nick, %::cmode, left the channel $+ $iif(%::text != $null, . Message: $strip(%::text)))
Quit             !script $ct.outevent(‹‹‹, %::nick, %::cmode, quit $+ $iif(%::text != $null, . Message: $strip(%::text)))
Kick             !script $ct.outevent(««, %::knick, %::cmode, has been kicked by %::nick $+ $iif(%::text != %::knick, . Reason: $strip(%::text)))

Notify           !script $ct.notify(online, %::nick, %::address, %::text)
UNotify          !script $ct.notify(offline, %::nick, %::address, %::text)

Echo             !script $ct.outecho(%::text)
EchoTarget       !script $ct.outecho(%::text)

DNS              !script $ct.outecho(DNS lookup for %::address)
DNSResolve       !script $ct.outecho(%::address resolved to %::iaddress - %::naddress)
DNSError         !script $ct.outecho(DNS lookup for %::address failed)

KickSelf         !script $ct.outecho(You have been kicked from %::chan by %::nick $+ $iif(%::text != %::me, . Reason: $strip(%::text)))
Names            !script $ct.outecho(User in Channel %::chan $+ : %::text)
ReJoin           !script $ct.outecho(Attempting to rejoin %::chan)
Error            !script $ct.outecho(Error: %::text)
ServerError      !script $ct.outecho(ServerError: %::text)
NotOnChan        !script $ct.outecho(Error: You are not on a channel!)

ModeUser         !script $ct.outspecial(User Mode, %::modes)
NoticeServer     !script $ct.outspecial(Server Notice, %::text)

Raw.001          !script $ct.outspecial(Connected to, %::text)
Raw.002          !script $ct.outspecial(Host, %::address)
Raw.003          !script $ct.outspecial(Created, %::value)
Raw.004          !script $null
Raw.005          !script $ct.outspecial(Protocols, $replace(%::text,are supported by this server,,are available on this server,))
RAW.221          !script $ct.outspecial(Usermodes, %::modes)
RAW.250          !script $ct.outspecial(Connections, %::value)
RAW.251          !script $ct.outspecial(Users, %::users users - %::value invisible)
RAW.252          !script $ct.outspecial(Opers, %::value online)
RAW.253          !script $ct.outspecial(Unknown, %::value connections)
RAW.254          !script $ct.outspecial(Channels, %::value formed)
RAW.255          !script $ct.outspecial(Clients, %::users - Servers: %::value)
RAW.265          !script $ct.outspecial(Local users, %::users - Max: %::value)
RAW.266          !script $ct.outspecial(Global users, %::users - Max: %::value)
RAW.302          !script $ct.outspecial(Userhost, %::nick ( $+ %::address $+ ) $+ [ $+ %::value $+ ])

RAW.305          !script $ct.outecho(You're no longer marked as being away)
RAW.306          !script $ct.outecho(You're now marked as being away)

WhoIs            !script $ct.whois(%::nick, %::wserver, %::address, %::realname, %::chan, %::isoper, %::isregd, %::operline, %::idletime, %::signontime, %::away)
RAW.330          !script set -u5 %ct.auth %::text



JoinSelf         !script set -u10 %ct.injoin $true

RAW.332          !script set -u10 %ct.topictext %::text
RAW.333          !script $ct.topic(%::nick, %::text)

RAW.324          !script set -u10 %ct.joinmodes %::modes
RAW.329          !script $ct.join(%::text)



RAW.353          !script $ct.names(%::chan, %::text)
RAW.366          !script $ct.namesend

RAW.341          !script $ct.outevent(‹—?, %nick, %cmode, has invited you to join %::chan)

RAW.381          !script $ct.outecho(You are now an IRC Operator)
RAW.401          !script $ct.outecho(No such nickname: %::nick)
RAW.403          !script $ct.outecho(No such channel: %::chan)
RAW.404          !script $ct.outecho(Can't send message to: %::nick)
RAW.421          !script $ct.outecho(Invalid Command: %::text)
RAW.433          !script $ct.outecho(%::nick is already in use!)

RAW.467          !script $ct.outecho(Can't join %::chan $+ : Password needed)
RAW.471          !script $ct.outecho(Can't join %::chan $+ : Full)
RAW.473          !script $ct.outecho(Can't join %::chan $+ : Invited Only)
RAW.474          !script $ct.outecho(Can't join %::chan $+ : Banned)

RAW.482          !script $ct.outecho(You should be an IRC Operator)


; ------------------------------------------------------------------------------
; Scheme list
; ------------------------------------------------------------------------------

Scheme1          Default (dark)
Scheme2          Blue
Scheme3          Blue (dark)
Scheme4          Green
Scheme5          Green (dark)
Scheme6          Orange
Scheme7          Orange (dark)


; ------------------------------------------------------------------------------
; Scheme: Default (dark)
; ------------------------------------------------------------------------------
[Scheme1]

Load             !script ct.load Default (dark)

RGBColors        0,0,0 255,255,255 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 0,252,0 0,147,147 0,255,255 0,0,255 255,0,255 114,111,103 158,153,143
BaseColors       14,15,14,00
Colors           0,1,7,13,1,1,1,3,4,7,15,15,15,1,15,1,5,5,15,1,1,0,1,0,1,11,12,0
		 
CLineOwner       05
CLineOp          05
CLineHOp         05
CLineVoice       07
CLineRegular     03
CLineMe          15

CLineCharOwner   05*
CLineCharOp      05@
CLineCharHOp     05%
CLineCharVoice   07+
CLineCharRegular 03
CLineCharMe      15



; ------------------------------------------------------------------------------
; Scheme: Blue
; ------------------------------------------------------------------------------
[Scheme2]

Load             !script ct.load Blue

RGBColors        250,250,255 0,0,0 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 170,170,213 99,119,177 64,80,128 0,0,255 255,0,255 114,111,103 158,153,143
BaseColors       11,01,15,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,11,11,1,1,1,0,1,0,1,11,12,0

CLineOwner       11
CLineOp          11
CLineHOp         11
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   11*
CLineCharOp      11@
CLineCharHOp     11%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15


; ------------------------------------------------------------------------------
; Scheme: Blue (Dark)
; ------------------------------------------------------------------------------
[Scheme3]

Load             !script ct.load Blue (dark)

RGBColors        30,30,45 255,255,255 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 170,170,213 128,143,191 99,119,177 0,0,255 255,0,255 155,151,142 200,198,193
BaseColors       09,15,14,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,11,11,1,1,1,0,1,0,1,11,12,0

CLineOwner       11
CLineOp          11
CLineHOp         11
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   11*
CLineCharOp      11@
CLineCharHOp     11%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15



; ------------------------------------------------------------------------------
; Scheme: Green
; ------------------------------------------------------------------------------
[Scheme4]

Load             !script ct.load Green

RGBColors        250,255,250 0,0,0 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 170,213,173 135,190,129 0,255,255 0,0,255 255,0,255 114,111,103 158,153,143
BaseColors       03,01,15,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,3,3,1,1,1,0,1,0,1,3,12,0

CLineOwner       03
CLineOp          03
CLineHOp         03
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   03*
CLineCharOp      03@
CLineCharHOp     03%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15


; ------------------------------------------------------------------------------
; Scheme: Green (Dark)
; ------------------------------------------------------------------------------
[Scheme5]

Load             !script ct.load Green (dark)

RGBColors        30,45,30 255,255,255 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 170,213,173 135,190,129 0,255,255 0,0,255 255,0,255 155,151,142 200,198,193
BaseColors       09,15,14,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,3,3,1,1,1,0,1,0,1,3,12,0

CLineOwner       03
CLineOp          03
CLineHOp         03
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   03*
CLineCharOp      03@
CLineCharHOp     03%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15



; ------------------------------------------------------------------------------
; Scheme: Orange
; ------------------------------------------------------------------------------
[Scheme6]

Load             !script ct.load Orange

RGBColors        255,250,245 0,0,0 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 215,191,100 200,166,68 0,255,255 0,0,255 255,0,255 114,111,103 158,153,143
BaseColors       07,01,15,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,7,7,1,1,1,0,1,0,1,7,12,0

CLineOwner       07
CLineOp          07
CLineHOp         07
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   07*
CLineCharOp      07@
CLineCharHOp     07%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15


; ------------------------------------------------------------------------------
; Scheme: Orange(Dark)
; ------------------------------------------------------------------------------
[Scheme7]

Load             !script ct.load Orange (dark)

RGBColors        46,39,16 255,255,255 0,0,128 107,180,118 255,0,0 188,109,107 160,0,160 193,153,60 255,255,0 228,214,154 217,183,102 0,255,255 0,0,255 255,0,255 155,151,142 200,198,193
BaseColors       09,15,14,00
Colors           0,1,10,13,1,1,1,9,4,10,15,1,1,1,1,1,7,7,1,1,1,0,1,0,1,7,12,0

CLineOwner       07
CLineOp          07
CLineHOp         07
CLineVoice       10
CLineRegular     09
CLineMe          15

CLineCharOwner   07*
CLineCharOp      07@
CLineCharHOp     07%
CLineCharVoice   10+
CLineCharRegular 09
CLineCharMe      15
