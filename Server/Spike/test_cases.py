import unittest
# import error
from Spike.Incident import *
from Spike import *

class TestDict(unittest.TestCase):
    def test_report_create(self):
        IncidentID = "123455"
        StreetName = "StateStreet"
        Location = "xxxx"
        Year =  2020
        Month = "6"
        Day = "9"
        Description = "xxxx"
        Category = "sss"
        result = InsertIncident(IncidentID, Location, Description, Category, Year, Month, Day, StreetName)
        self.assertTrue(result["Status"])
        self.assertEqual(result["Msg"],"Success")
        order_list = mongo.db.Incident
        myquery = {"IncidentID": IncidentID}
        users = order_list.find(myquery)
        length = users.count()
        self.assertTrue(length,1)

    def test_get_report_by_category(self):
        Category = "sss"
        IncidentID = "123455"
        result = FindByCategory(IncidentID)
        self.assertTrue(result["Status"])
        self.assertEqual(result["Msg"], "Success")


    def test_get_report_by_date(self):
        BeginYear = "2020"
        BeginMonth = "1"
        BeginDay = "1"
        EndYear = "2021"
        EndMonth ="12"
        EndDay = "3"
        result = FindReportsByDate(BeginYear, BeginMonth, BeginDay, EndYear, EndMonth, EndDay)
        self.assertTrue(result["Status"])
        self.assertEqual(result["Msg"], "Success")


    def test_get_report_by_location(self):
        StreetName = "StateStreet"
        result = FindReportsByStreet(StreetName)
        self.assertTrue(result["Status"])
        self.assertEqual(result["Msg"], "Success")


    def test_delete_report_by_id(self):
        IncidentID = "123455"
        result = DeleteIncidentById(IncidentID)
        self.assertTrue(result["Status"])
        self.assertEqual(result["Msg"], "Success")
        order_list = mongo.db.Incident
        myquery = {"IncidentID": IncidentID}
        users = order_list.find(myquery)
        length = users.count()
        self.assertTrue(length, 0)





if __name__ == '__main__':
    unittest.main()

