class Response:
    def __init__(self) -> None:
        self.FAILED:str = 'FAILED'
        self.SUCCESS:str = 'SUCCESS'
        self.status:str = self.SUCCESS
        self.detail:str = ''
        self.data = {}
    def success(self):
        self.status = self.SUCCESS
        return self
    def failed(self):
        self.status = self.FAILED
        return self
    def put_detail(self,detail:str):
        self.detail = detail
        return self
    def put_data(self,data:dict):
        self.data=data
        return self
    def response_dict(self):
        res ={
            'STATUS':self.status,
            'DETAIL':self.detail
        }
        if len(self.data)>0:
            res['DATA']=self.data
        return res