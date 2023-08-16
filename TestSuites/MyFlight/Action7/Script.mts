Date
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Baron"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("Micro Focus MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 100
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
