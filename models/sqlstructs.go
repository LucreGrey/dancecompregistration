package models

type Competition struct {
	Id   int
	Name string
	Year string
}

type Event struct {
	Id        int
	CompId    int
	DStatuses string
	Name      string
}

type Competitor struct {
	Id      int
	CompId  int
	LFName  string
	LLName  string
	LDOB    string
	LPhone  string
	LNDCA   int
	LEmail  string
	LStatus string
	FFName  string
	FLName  string
	FDOB    string
	FPhone  string
	FNDCA   int
	FEmail  string
	FStatus string
	Address string
	City    string
	State   string
	Country string
	Zip     string
	Studio  string
}
